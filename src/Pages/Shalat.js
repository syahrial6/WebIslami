import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Shalat() {
    const [data,setData] = useState([{
        nama:"Muhammad Syahrial",
        ttl:"6 Juni 2001",
        sekolah:"Untan"
    },
    {
        nama:"Ahmad Syahrial",
        ttl:"6 Juni 2001",
        sekolah:"Untan"
    },
    {
        nama:"Muiku Syahrial",
        ttl:"6 Juni 2001",
        sekolah:"Untan"
    },
    {
        nama:"React Syahrial",
        ttl:"6 Juni 2001",
        sekolah:"Untan"
    },
]);
    const [searchTerm, setSearchTerm] = useState('');


      const filteredData = data.filter((item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
      <audio controls>
  <source src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3" type="audio/mpeg"/>
  <source src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3" type="audio/ogg"/>
  Your browser does not support the audio element.
</audio>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.nama}</li>
        ))}
      </ul>
    </div>
  )
}

export default Shalat
