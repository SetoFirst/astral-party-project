export const getTypeBgClass = (type: string): string => {
  switch (type) {
    case "Attack":
      return "bg-red-500 text-white font-bold";
    case "Defend":
      return "bg-blue-400 text-white font-bold";
    case "Effect":
      return "bg-green-500 text-white font-bold";
    case "Counter":
      return "bg-purple-500 text-white font-bold";
    case "Event":
      return "bg-yellow-400 text-white font-bold";
    case "Luck":
      return "bg-orange-400 text-white font-bold";
    case "Jinx":
      return "bg-blue-600 text-white font-bold";
    default:
      return "bg-gray-200 text-white font-bold";
  }
};
