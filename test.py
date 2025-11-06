# ...existing code...
item = "banana"
Item = " ALBERTITO"
item_name = "orange"

def show_all():
    print(item + Item)
    print("Albert is an " + item_name)

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="banana-news commands")
    parser.add_argument("command", nargs="?", default="show", choices=["show","item","name"],
                        help="show = both (default), item = banana+ALBERTITO, name = Albert's item name")
    args = parser.parse_args()

    if args.command == "show":
        show_all()
    elif args.command == "item":
        print(item + Item)
    elif args.command == "name":
        print("Albert is an " + item_name)
# ...existing code...
