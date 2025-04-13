import re
from datetime import datetime, timedelta
from collections import defaultdict
import csv

def parse_chat(chat_content):
    joined_users = defaultdict(set)
    active_users = defaultdict(set)
    user_activity_days = defaultdict(set)
    all_dates = []

    lines = chat_content.split('\n')

    for line in lines:
        match = re.match(r'^(\d{1,2}/\d{1,2}/\d{2,4}), .* - (.*?):', line)
        if match:
            date_str, user = match.groups()
            try:
                date = datetime.strptime(date_str, '%m/%d/%y').strftime('%d-%m-%Y')
                all_dates.append(date)

                # New correct joined users logic
                if ('added' in line.lower() and 'added you' not in line.lower()) or \
                   ('joined using this group' in line.lower()):
                    joined_users[date].add(user)

                # Active Users
                active_users[date].add(user)
                user_activity_days[user].add(date)

            except:
                continue

    # Unique sorted dates
    unique_dates = sorted(list(set(all_dates)), key=lambda x: datetime.strptime(x, '%d-%m-%Y'))

    # Latest Date from Chat
    last_date = datetime.strptime(unique_dates[-1], '%d-%m-%Y')

    # Last 7 days from latest date
    last_7_days = [(last_date - timedelta(days=i)).strftime('%d-%m-%Y') for i in range(6, -1, -1)]

    # Count for graph
    active_count = [len(active_users.get(day, [])) for day in last_7_days]
    joined_count = [len(joined_users.get(day, [])) for day in last_7_days]

    consistent_users = [user for user, days in user_activity_days.items() if len(days) >= 4]

    return {
        'last_7_days': last_7_days,
        'active_users': active_count,
        'joined_users': joined_count,
        'consistent_users': consistent_users,
        'total_active_users': len(user_activity_days),
        'total_joined_users': sum(len(v) for v in joined_users.values())
    }

def export_csv(last_7_days, active_users, joined_users):
    with open('report.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Date', 'Active Users Count', 'Joined Users Count'])
        for i in range(len(last_7_days)):
            writer.writerow([last_7_days[i], active_users[i], joined_users[i]])
