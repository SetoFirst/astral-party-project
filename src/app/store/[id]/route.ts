import { ListCard } from "../ListCard";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const ListCards = ListCard.find((ListCards) => ListCards.id === parseInt(id));
  return Response.json(ListCards);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { image, name, type, description } = body;

  // หา index ของ item ที่ต้องการอัปเดต
  const index = ListCard.findIndex(
    (ListCards) => ListCards.id === parseInt(id)
  );

  if (index === -1) {
    return Response.json({ error: "Item not found" }, { status: 404 });
  }

  // อัปเดตทุกฟิลด์ที่ส่งมา
  ListCard[index].image = image;
  ListCard[index].name = name;
  ListCard[index].type = type;
  ListCard[index].description = description;

  // ส่ง response กลับเป็นข้อมูลที่อัปเดตแล้ว
  return Response.json(ListCard[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = ListCard.findIndex(
    (ListCards) => ListCards.id === parseInt(id)
  );
  const deletedListCards = ListCard[index];
  ListCard.splice(index, 1);
  return Response.json(deletedListCards);
}
