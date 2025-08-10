
import Card from './Card'
import { LiaUsersCogSolid } from "react-icons/lia";
import { VscPreview } from "react-icons/vsc";
import { TbFileLike } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";
export default function AnimateCart() {
 


const cards = [
  {
    end: 199,
    title: "Total Post",
    icon: <MdOutlinePostAdd className="text-[#00CED1] text-5xl " size={60}/>,
  },
  {
    end: 467,
    title: " Review",
    icon: <VscPreview  className="text-[#00CED1] text-sm " size={58}/>, // Gold color for reviews
  },
  {
    end: 1900,
    title: "  Likes  Users",
    icon: <TbFileLike className="text-[#00CED1] text-sm" size={60}/>,
  },
  {
    end: 300,
    title: "Total Users",
    icon: <LiaUsersCogSolid  className="text-[#00CED1] text-sm" size={60}/>,
  },
];

  
  return (
    <>
     <div className='max-w-[80%] mx-auto'>
     <div>
        <h1 className="text-xl md:text-2xl font-bold  mt-10 text-white mb-4">We Provide Unique <span className='text-[#00CED1]'>Sharing Knowledge</span></h1>

      </div>
     <div className=' grid lg:grid-cols-4 md:grid-cols-2 mt-8 mb-8 gap-2'>
      {
        cards.map(card=><Card key={card} card={card}/>
         
        )
      }
      </div>
     </div>
    </>
  );
}