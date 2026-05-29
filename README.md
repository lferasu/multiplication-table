# Sky's Math Facts Quest

Sky's Math Facts Quest is a small browser game for 10-year-olds who are learning addition, subtraction, multiplication, and division and want to chase a perfect score.

## What it includes

- Difficulty levels from 1 to 12.
- Four operations:
  - Addition with a stacked column board for 2- to 5-digit sums
  - Subtraction with a stacked column board for 2- to 5-digit differences
  - Multiplication
  - Division with exact whole-number answers only
  - Mixed rounds that pull from every operation the selected mode supports
- Five game versions:
  - Normal: calm mode with a configurable question count.
  - Trifecta: three-line column addition or subtraction with the same score-and-streak flow as Normal.
  - Sprint: timed mode with 45 seconds.
  - Perfect Run: one mistake ends the round.
  - Flash Cards: focus on one table or one divisor with answer reveal controls.
- Score, streak, badges, progress tracking, and flash-card answer reveals.
- Addition and subtraction use interactive carry or borrow rows with digit-by-digit answer inputs in Normal, Trifecta, Sprint, and Perfect Run.

## Difficulty rules

- Multiplication starts from the 2 times table.
- Multiplication level 6 asks questions using tables 2 through 6.
- Division level 6 uses exact division facts with divisors 2 through 6.
- Addition and subtraction levels scale from 2-digit column problems up to 5-digit column problems.
- Level 12 unlocks all supported fact families from 2 through 12, while 2, 10, and 11 stay rarer than the others.

Addition questions use a stacked board with carry boxes. Subtraction questions use the same board style with borrow boxes. Multiplication questions use factors up to the selected level. Division questions are generated from multiplication facts so the answers stay whole numbers.

## Run it

Open `index.html` in a browser.

## Design notes

- The game makes perfect accuracy feel like the main mission instead of just a side stat.
- Normal is the default because it is the least stressful entry point for a 10-year-old.
- Sprint gives variety without changing the core learning goal.
- Perfect Run is the clearest way to reward mastery and repeat practice.
- Flash Cards gives focused practice on one multiplication table or one division family.