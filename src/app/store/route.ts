import { NextRequest } from "next/server";
import { ListCard } from "./ListCard";

// GET ข้อมูล http://localhost:3000/store
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? ListCard.filter((ListCards) => ListCards.name.includes(query))
    : ListCard;
  return Response.json(filteredComments);
}

// POST ข้อมูล http://localhost:3000/store
export async function POST(request: Request): Promise<Response> {
  const ListCards = await request.json();
  const newListCards = {
    id: ListCard.length + 1,
    image: ListCards.image,
    name: ListCards.name,
    type: ListCards.type,
    description: ListCards.description,
  };
  ListCard.push(newListCards);
  return new Response(JSON.stringify(newListCards), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
