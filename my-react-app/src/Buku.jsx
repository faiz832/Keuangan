import { useEffect, useState } from "react";
import axios from "axios";

function Buku() {
  const [buku, setBuku] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://crud-buku-production.up.railway.app/api/books")
      .then((response) => {
        setBuku(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold">Daftar Buku</h1>
        <div className="my-4 p-4 bg-gray-100">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="mt-4">
              {buku.map((buku) => (
                <div key={buku.id} className="border border-gray-300 p-4 mb-4">
                  <h2 className="text-lg font-semibold">{buku.author}</h2>
                  <p>{buku.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Buku;
