import React from 'react';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';

const AllTeachers = () => {
    return (
        <div>
            <div className=" overflow-x-auto rounded-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#2366B5]">
                        <tr>
                            <th className="px-6 py-4">
                                Title
                            </th>
                            <th className="px-6 py-4">
                                Author
                            </th>
                            <th className="px-6 py-4">
                                Tag
                            </th>
                            <th className="px-6 py-4">
                                ID
                            </th>

                            <th className="px-6 py-4">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td className="px-6 py-4">
                                10 Killer Negotiating Killer Tools and Techniques — Elementor
                            </td>
                            <td className="px-6 py-4">
                                Kamruzzaman Mayed
                            </td>
                            <td className="px-6 py-4">
                                Business, Personal Development
                            </td>
                            <td className="px-6 py-4">
                                5f65558s85dsad8865
                            </td>

                            <td className="px-6 py-4">
                                <div className='flex gap-3 cursor-pointer'>
                                    <AiOutlineEye></AiOutlineEye>
                                    <AiOutlineEdit></AiOutlineEdit>
                                    <AiOutlineCopy></AiOutlineCopy>
                                    <AiOutlineDelete></AiOutlineDelete>
                                </div>
                            </td>

                        </tr>

                        <tr>

                            <td className="px-6 py-4">
                                10 Killer Negotiating Killer Tools and Techniques — Elementor
                            </td>
                            <td className="px-6 py-4">
                                Kamruzzaman Mayed
                            </td>
                            <td className="px-6 py-4">
                                Business, Personal Development
                            </td>
                            <td className="px-6 py-4">
                                5f65558s85dsad8865
                            </td>

                            <td className="px-6 py-4">
                                <div className='flex gap-3 cursor-pointer'>
                                    <AiOutlineEye></AiOutlineEye>
                                    <AiOutlineEdit></AiOutlineEdit>
                                    <AiOutlineCopy></AiOutlineCopy>
                                    <AiOutlineDelete></AiOutlineDelete>
                                </div>
                            </td>

                        </tr><tr>

                            <td className="px-6 py-4">
                                10 Killer Negotiating Killer Tools and Techniques — Elementor
                            </td>
                            <td className="px-6 py-4">
                                Kamruzzaman Mayed
                            </td>
                            <td className="px-6 py-4">
                                Business, Personal Development
                            </td>
                            <td className="px-6 py-4">
                                5f65558s85dsad8865
                            </td>

                            <td className="px-6 py-4">
                                <div className='flex gap-3 cursor-pointer'>
                                    <AiOutlineEye></AiOutlineEye>
                                    <AiOutlineEdit></AiOutlineEdit>
                                    <AiOutlineCopy></AiOutlineCopy>
                                    <AiOutlineDelete></AiOutlineDelete>
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTeachers;