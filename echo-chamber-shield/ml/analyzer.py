# analyzer.py


import json
import pandas as pd
from ml.utils import clean_text
from ml.scoring import (
    bias_to_polarity,
    compute_variance,
    build_network,
    compute_ei,
    compute_mixing,
    final_echo_score
)


DATA_PATH = "ml/data/released_data.json"

# Load dataset once at startup
def load_dataset():
    rows = []
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        for line in f:
            if line.strip():
                rows.append(json.loads(line))
    return pd.DataFrame(rows)

df = load_dataset()


def analyze_article(text):
    """Main function used by backend API & Chrome extension."""

    cleaned = clean_text(text)

    # Fallback bias if nothing matches
    bias_label = "Center"

    # Find closest article in dataset (simple matching)
    for _, row in df.iterrows():
        if row["title"].lower()[:10] in cleaned:
            bias_label = row.get("allsides_bias", "Center")
            break

    p = bias_to_polarity(bias_label)
    v = compute_variance(p)

    # Build small network of 20 nodes for EI & mixing
    G = build_network(20)
    groups = {i: bias_label for i in G.nodes}  # simple same-group model

    ei_values = compute_ei(G, groups)
    mixing_values = compute_mixing(G, groups)

    ei = list(ei_values.values())[0]
    mix = list(mixing_values.values())[0]

    score = final_echo_score(p, v, ei, mix)

    return {
        "polarity": p,
        "variance": v,
        "ei_index": ei,
        "mixing": mix,
        "echo_score": score,
        "bias_label": bias_label,
        "explanations": [
            f"Bias detected: {bias_label}",
            f"Polarity score: {p}",
            f"Variance score: {v}",
            f"Network EI: {ei}",
            f"Mixing: {mix}",
            f"Final Echo Chamber Score: {score}"
        ]
    }
