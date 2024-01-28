import "../Front/font.css";
import Link from "next/link";

// ... (import statements)

export default function Blog() {
  const blogData = [
    {
      name: "Decision Tree",
      bImage: "./decisionTree.png",
      link: "https://chalk-hornet-dcf.notion.site/Decision-Tree-4d0c1834b9734ec1a9d47398d335a425?pvs=4",
    },
  ];

  return (
    <main className=" bg-white w-screen h-screen px-10 gap-10">
      <div className="w-4/5 mx-auto flex justify-center items-center h-[150px] border-b-black border-b-2">
        <h1 className="text-black text-center thatMe text-8xl mb-4">Blog</h1>
      </div>
      <div className="flex flex-col mx-auto w-4/5 mt-8 flex-wrap justify-start items-start">
        {blogData.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="w-[250px] h-[300px] bg-black flex flex-col rounded-lg shadow-lg shadow-gray-800 justify-between transform hover:scale-105 transition duration-200 items-center">
              <img className="object-cover" src={item.bImage} alt={item.name} />
              <div className="w-full h-[50px] flex justify-center items-center bg-black rounded-lg">
                <p className="cusFont">{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

