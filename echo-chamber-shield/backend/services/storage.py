user_history = {}  # simple dictionary

def save_history(user_id, result):
    if user_id not in user_history:
        user_history[user_id] = []
    user_history[user_id].append(result)

def get_history(user_id):
    return user_history.get(user_id, [])
