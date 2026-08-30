export type Category = "leads" | "recruiting" | "content" | "sales" | "ops"

// Fixed priority order — also the order the Step 2 options are presented in.
// The "top category" is the first of these that the user selected.
export const CATEGORY_ORDER: Category[] = ["leads", "recruiting", "content", "sales", "ops"]

// Step 1 — team size buckets, index-aligned with the option list.
export const TEAM_SIZE_RATES = [55, 65, 75, 90]
export const TEAM_SIZE_MULTIPLIERS = [1, 1.6, 2.8, 4.5]

// Step 3 — hours/week buckets, index-aligned with the option list.
// Upper third of each range rather than the midpoint.
export const HOURS_UPPER_THIRD = [4, 15, 32, 50]

// Step 4 — automation factor depends on how it's handled today, index-aligned.
// Base 0.8 for fully manual; existing-but-disconnected tools and failed
// attempts leave less easily reclaimable time.
export const AUTOMATION_FACTORS = [0.8, 0.65, 0.7]

// Display-only caps — the internal math is uncapped, but the UI shows
// "$50,000+" / "300+ hours" beyond these to keep extreme combos plausible.
export const DISPLAY_DOLLAR_CAP = 50000
export const DISPLAY_HOURS_CAP = 300

const WEEKS_PER_MONTH = 4.33
const EXTRA_CATEGORY_BONUS = 0.2

// Floor defaults for unanswered steps. The live estimate must only ever grow
// (or stay equal) as the user answers, so every placeholder is the lowest
// possible assumption — never a midpoint that a real answer could undercut.
const FLOOR_WEEKLY_HOURS = HOURS_UPPER_THIRD[0] // "Under 5"
const FLOOR_AUTOMATION_FACTOR = Math.min(...AUTOMATION_FACTORS) // "some tools in place"
// With no category selected yet there's no statement at all — priced below the
// single-category baseline so the very first checkbox click visibly moves the number.
const FLOOR_CATEGORY_MULTIPLIER = 0.8

export function getTopCategory(selected: Category[]): Category | null {
  for (const category of CATEGORY_ORDER) {
    if (selected.includes(category)) return category
  }
  return null
}

export type Estimate = { monthlyDollars: number; monthlyHours: number }

export function estimate(
  teamSizeIndex: number | null,
  selectedCategories: Category[],
  hoursIndex: number | null,
  handlingIndex: number | null
): Estimate | null {
  if (teamSizeIndex === null) return null

  const rate = TEAM_SIZE_RATES[teamSizeIndex]
  const teamMultiplier = TEAM_SIZE_MULTIPLIERS[teamSizeIndex]
  const weeklyHours = hoursIndex !== null ? HOURS_UPPER_THIRD[hoursIndex] : FLOOR_WEEKLY_HOURS
  const automationFactor =
    handlingIndex !== null ? AUTOMATION_FACTORS[handlingIndex] : FLOOR_AUTOMATION_FACTOR
  const categoryMultiplier =
    selectedCategories.length === 0
      ? FLOOR_CATEGORY_MULTIPLIER
      : 1 + EXTRA_CATEGORY_BONUS * (selectedCategories.length - 1)

  const monthlyDollars =
    weeklyHours * WEEKS_PER_MONTH * rate * automationFactor * categoryMultiplier * teamMultiplier
  const monthlyHours = weeklyHours * WEEKS_PER_MONTH * automationFactor * categoryMultiplier

  return { monthlyDollars, monthlyHours }
}
