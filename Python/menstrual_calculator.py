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
    return {start_fertility_period, end_fertility_period}

