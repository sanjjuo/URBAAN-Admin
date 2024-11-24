import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { AppContext } from '../../../StoreContext/StoreContext';
import { DeleteModal } from '../../DeleteModal/DeleteModal';

const AddedCategories = () => {
    const { open, handleOpen } = useContext(AppContext)
    const addedCategories = [
        {
            id: "1",
            category: "Kurti",
            subCategories: ["Kurti", "Kurti Set", "Ethnic Wear", "Dress"],
        },
        {
            id: "2",
            category: "Kurti",
            subCategories: ["Top $ Bottom Set", "Top, Bottom Dupatta Set",],
        },
        {
            id: "3",
            category: "Bottom",
            subCategories: ["Pants", "Leggings", "Pallazo", "Jeans"],
        },
        {
            id: "4",
            category: "Maternity Wear",
            subCategories: ["Pre Maternity", "Post Maternity", "Maternity Nighty"],
        },
        {
            id: "5",
            category: "Maternity Wear",
            subCategories: ["Pre Maternity", "Post Maternity", "Maternity Nighty"],
        },
        {
            id: "6",
            category: "Maternity Wear",
            subCategories: ["Pre Maternity", "Post Maternity", "Maternity Nighty"],
        },
        {
            id: "7",
            category: "Maternity Wear",
            subCategories: ["Pre Maternity", "Post Maternity", "Maternity Nighty"],
        },
        {
            id: "8",
            category: "Maternity Wear",
            subCategories: ["Pre Maternity", "Post Maternity", "Maternity Nighty"],
        },
    ];

    return (
        <>
            {addedCategories.map((item) => (
                <div className="bg-white rounded-xl shadow-md p-5 h-64 space-y-6 relative" key={item.id}>
                    {/* Category Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-2xl">{item.category}</h2>
                        <div className="flex gap-2 text-sm">
                            <button className="text-buttonBg bg-editBg w-14 h-7 flex justify-center items-center rounded-md
                                 hover:bg-buttonBg hover:text-editBg">
                                Edit
                            </button>
                            <button onClick={handleOpen} className="text-deleteBg bg-primary/20 w-14 h-7 flex justify-center items-center rounded-md
                                 hover:bg-primary hover:text-white">
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* Subcategories List */}
                    <ul className="space-y-2 text-secondary/50">
                        {item.subCategories.map((sub, i) => (
                            <li key={i} className='font-normal'>{sub}</li>
                        ))}
                    </ul>

                    {/* Read More Link */}
                    <Link to="#" className="absolute bottom-5 text-buttonBg flex items-center gap-2 hover:text-blue-900">
                        Read More <FaArrowRight />
                    </Link>
                </div>
            ))}

            <DeleteModal open={open} handleOpen={handleOpen}/>
        </>
    );
};

export default AddedCategories;
