import json
import pandas as pd

path = "ml/data/released_data.json"

def load_dataset():
    rows = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():  # ignore empty lines
                rows.append(json.loads(line))
    return pd.DataFrame(rows)

df = load_dataset()
print("Loaded rows:", len(df))
print(df.head())
