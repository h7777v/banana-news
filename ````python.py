````python
````python
````python
python
# then in the REPL
import builtins
print(sorted(name for name in dir(builtins) if callable(getattr(builtins, name))))
# or for everything:
help("builtins")