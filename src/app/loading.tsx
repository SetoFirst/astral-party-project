import Spinner from "./components/Spinner";

export default function Loading() {
  console.log("Download complete");
  // You can add any UI inside Loading, including a Skeleton.
  return <Spinner />;
}
