# Workflow Caching Guide

## Quick Wins
1. **Always use cache: 'npm'** in setup-node
2. **Parallelize independent jobs** (lint, test, security)
3. **Add path filters** to skip unnecessary runs
4. **Use concurrency** to cancel outdated runs

## When to Use Each Strategy

### Dependency Caching
- Use: Every workflow that installs packages
- Impact: 40-60% faster installs
- Cost: Nearly zero

### Docker Layer Caching
- Use: Workflows building Docker images
- Impact: 50-80% faster builds
- Cost: Some cache storage

### Path Filtering
- Use: Large repos with separate concerns
- Impact: Avoids 30-50% of runs
- Cost: None

### Sparse Checkout
- Use: Very large repos (>1GB)
- Impact: Faster clone for large repos
- Cost: Added complexity

## Monitoring
- Track workflow durations weekly
- Monitor cache hit rates
- Review cache storage usage monthly
