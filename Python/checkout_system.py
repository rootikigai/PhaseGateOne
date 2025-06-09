from datetime import datetime

customers = []
cashiers = []

def get_current_datetime():
	return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
