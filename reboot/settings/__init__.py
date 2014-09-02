"""
Settings used by reboot project.

This consists of the general produciton settings, with an optional import of any local
settings.
"""

# Import production settings.
from reboot.settings.production import *

# Import optional local settings.
try:
    from reboot.settings.local import *
except ImportError:
    pass