import json

f = open('automobili.json')
data = json.load(f)
print(json.dumps(data))

