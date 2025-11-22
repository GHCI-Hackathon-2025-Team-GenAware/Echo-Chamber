# test_ml.py

from ml.analyzer import analyze_article

sample_text = """
Trump blasts former Starbucks CEO Howard Schultz, says ex-Starbucks CEO doesn't have the guts to run in 2020.
"""

result = analyze_article(sample_text)

print("=== ML Analysis Result ===")
for k, v in result.items():
    print(f"{k}: {v}")
