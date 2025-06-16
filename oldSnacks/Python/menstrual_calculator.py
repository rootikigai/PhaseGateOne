from datetime import datetime
from datetime import timedelta

def get_any_date_input(prompt_user):
    while True:
        user_input = input(prompt_user)
        try:
            user_date = datetime.strptime(user_input, "%Y-%m-%d")
            return user_date
        except ValueError:
            print("Invalid Date. See example: 2025-10-27, year first, month next, day last...no whine me.")

def get_next_period_date(last_period_start_date, ave_cycle_days):
    next_period_date = last_period_start_date + timedelta(days = ave_cycle_days)
    return next_period_date

def get_ovulation_date(last_period_start_date, ave_cycle_days):
    ovulation_date = last_period_start_date + timedelta(days = (ave_cycle_days - 14))
    return ovulation_date

def get_fertility_period(ovulation_date):
    start_fertility_period = ovulation_date - timedelta(days = 2)
    end_fertility_period = ovulation_date + timedelta(days = 2)
    return {"start_fertility_period": start_fertility_period, 
            "end_fertility_period": end_fertility_period
    }

def get_safe_days_period(last_period_start_date, period_days, fertility_period, next_period_date):
    period_end = last_period_start_date + timedelta(days = period_days)
    safe_before_fert_start = period_end
    safe_before_fert_end = fertility_period["start_fertility_period"] - timedelta(days = 1)
    safe_after_fert_end = fertility_period["end_fertility_period"] + timedelta(days = 1)
    safe_before_next_period = next_period_date - timedelta(days = 1)
    return{
        "safe_before_fert_start": safe_before_fert_start,
        "safe_before_fert_end": safe_before_fert_end,
        "safe_after_fert_end": safe_after_fert_end,
        "safe_before_next_period": safe_before_next_period
    }

print("""
    ===Menstrual Calculator===
""")

last_period_start_date = get_any_date_input("Please, enter the date when your last period started (YYYY-MM-DD): ")
ave_cycle_days = int(input("Please enter your average cycle length in days: "))
period_days = int(input("Please enter the number of days your period lasts: "))

next_period_date = get_next_period_date(last_period_start_date, ave_cycle_days)
ovulation_date = get_ovulation_date(last_period_start_date, ave_cycle_days)
fertility_period = get_fertility_period(ovulation_date)
safe_days = get_safe_days_period(last_period_start_date, period_days, fertility_period, next_period_date)

print("""
===Your Results Are In===
""")
print(f"Next Period Date: {next_period_date.strftime('%A, %B %d, %Y')}")
print(f"Ovulation Date: {ovulation_date.strftime('%A, %B %d, %Y')}")
print(f"Fertility Period: {fertility_period['start_fertility_period'].strftime('%A, %B %d, %Y')} - {fertility_period['end_fertility_period'].strftime('%A, %B %d, %Y')}")
print(f"Safe Days Period: {safe_days['safe_before_fert_start'].strftime('%A, %B %d, %Y')} - {safe_days['safe_before_fert_end'].strftime('%A, %B %d, %Y')} and "
      f"{safe_days['safe_after_fert_end'].strftime('%A, %B %d, %Y')} - {safe_days['safe_before_next_period'].strftime('%A, %B %d, %Y')}")
