# scoring.py

import random
import numpy as np
import networkx as nx

# Mapping AllSides bias → numeric polarity
BIAS_MAP = {
    "Left": 0.0,
    "Lean Left": 0.25,
    "Center": 0.5,
    "Lean Right": 0.75,
    "Right": 1.0,
}

def bias_to_polarity(label):
    return BIAS_MAP.get(label, 0.5)


def compute_variance(p):
    """Simulated variance based on history."""
    hist = [p + random.uniform(-0.1, 0.1) for _ in range(5)]
    return float(np.var(hist))


def build_network(n):
    """Random user network"""
    adj = (np.random.rand(n, n) < 0.05).astype(int)
    np.fill_diagonal(adj, 0)
    return nx.from_numpy_array(adj)


def compute_ei(G, groups):
    ei = {}
    for node in G:
        nbrs = list(G.neighbors(node))
        if not nbrs:
            ei[node] = 0
            continue
        
        same = sum(groups[n] == groups[node] for n in nbrs)
        diff = len(nbrs) - same
        ei[node] = (diff - same) / len(nbrs)
    
    return ei


def compute_mixing(G, groups):
    mixing = {}
    for node in G:
        nbrs = list(G.neighbors(node))
        if not nbrs:
            mixing[node] = 0
            continue
        
        same = sum(groups[n] == groups[node] for n in nbrs)
        mixing[node] = same / len(nbrs)
    
    return mixing


def final_echo_score(p, v, ei, mixing):
    """
    Your formula:
    40% polarity + 30% variance + 20% EI + 10% (1 - mixing)
    """
    score = (
        0.4 * p +
        0.3 * v +
        0.2 * ei +
        0.1 * (1 - mixing)
    )
    return round(100 * score, 2)
