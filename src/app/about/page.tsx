import React from 'react';

interface Props {

}

const AboutUs: React.FC<Props> = ({ }) => {
    return (
        <main>
            <div className='h-[500px]  bg-[url("/image/about..jpg")] bg-[top]  bg-no-repeat bg-cover flex items-center' >
                <div className='container mx-auto flex  flex-col items-center md:block'>
                    <h1 className='w-[230px] md:w-[550px] text-[48px] text-white leading-[3rem]  md:leading-[100px] md:text-[100px]'>ABOUT RAMANA</h1>

                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="px-20">
                    <div>
                        <h2 className='uppercase text-[16px] font-bold'>about us</h2>
                        <hr className='mt-3' />
                    </div>
                    <div className='flex gap-x-10 mt-10 mb-5'>
                        <div className="flex-1">
                            <h1 className='text-[36px] font-medium uppercase'>The idea and creation of the brand ramana castle </h1>
                        </div>
                        <div className="flex-1">
                            <p>There are two stairs for walking up to the tower walls. It is possible to walk up by spiral stairs from inner side of the tower to a corridor, which was built about 3 metres (10 ft) outside of the tower. The other stone stair walks up to the upper side of the tower from the garden. By means of these stairs it is possible to walk up to the tower walls and look at the village from above. <br /> <br />

                                Unlike Mardakan Castle, the natural location of Ramana Castle is different; it is on the rocks. The strong tower walls supposedly are a natural continuation of rocky slopes. There is an arch in the eastern wall of the tower.<br />
                                The strong tower walls supposedly are natural continuation.<br /> <br />

                                There is a strong rectangular donjon on the walls of the castle like a donjon of the Mardakan Castle. Entrances standing opposite to each other have a favourable condition of serving for defense. But unlike other towers of Absheron Rayon the entrance with spiral stairs of this castle is not at a height, it is at the level of ground. There are windows for shooting in all walls.There is a strong rectangular donjon on the walls of the castle like a donjon of the Mardakan Castle.<br /> <br />

                                Entrances standing opposite to each other have a favourable condition of serving for defense. But unlike other towers of Absheron Rayon the entrance with spiral stairs of this castle is not at a height, it is at the level of ground. There are windows for shooting in all walls.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[460px]  bg-[url("/image/contact2.jpg")]  bg-[top]  bg-no-repeat bg-cover flex items-center' >
                <div className="container mx-auto">
                    <div className="px-20">
                        <div className="flex gap-x-10 text-white">
                            <div className="flex-1">
                                <h2 className='text-[36px] font-medium uppercase mb-5'>WHY RAMANA CASTLE</h2>
                                <p className='text-[16px] font-normal'>There are two stairs for walking up to the tower walls. It is possible to walk up by spiral stairs from inner side of the tower to a corridor, which was built about 3 metres (10 ft) outside of the tower. The other stone stair walks up to the upper side of the tower from the garden. By means of these stairs it is possible to walk up to the tower walls and look at the village from above.
                                    The other stone stair walks up to the upper side of the tower from the garden. By means of these stairs it is possible to walk up to the tower walls and look at the village from above.
                                    By means of these stairs it is possible to walk up to the tower walls.</p>
                            </div>
                            <div className="flex-1">
                                <p className='text-[16px] font-normal'>Unlike Mardakan Castle, the natural location of Ramana Castle is different; it is on the rocks. The strong tower walls supposedly are a natural continuation of rocky slopes. There is an arch in the eastern wall of the tower.
                                    Unlike Mardakan Castle, the natural location of Ramana Castle is different; it is on the rocks. The strong tower walls supposedly are a natural continuation of rocky slopes. There is an arch in the eastern wall of the tower. <br /> <br />

                                    There are two stairs for walking up to the tower walls. It is possible to walk up by spiral stairs from inner side of the tower to a corridor, which was built about 3 metres (10 ft) outside of the tower. The other stone stair walks up to the upper side of the tower from the garden. By means of these stairs it is possible to walk up to the tower walls. By means of these stairs it is possible to walk up to the tower walls.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;