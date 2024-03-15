from pydantic import BaseModel

class Item(BaseModel):
    id: int
    name: str
    decription: str = None
    price: float
    tax: float = None 