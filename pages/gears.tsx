import React from 'react';
import { MainLayout } from '../components/layout';
import GearCard from '../components/cards/GearCard';

const Gears = () => {
    return (
        <MainLayout>
            <div className={'flex flex-col gap-6 mt-10'}>
                <div className={'flex flex-col gap-2'}>
                    <h1>Gears</h1>
                    <div>
                        I thought some people might be interested to know what I use for day to day as a software
                        developer. I do not have fancy equipment. I just have enough for what I do 😛.
                    </div>
                </div>
                <div className={'flex flex-col gap-4'}>
                    <h2>Computer</h2>
                    <div>
                        <GearCard
                            imageSrc={'/imac.png'}
                            title={'27" iMac 2019'}
                            detail={'3.7 GHz 6-Core Intel Core i5 | 24 GB RAM | Radeon Pro 580X 8 GB'}
                        />
                    </div>
                    <div>
                        <GearCard
                            imageSrc={'/razor_ornata_v2.png'}
                            title={'Razor Ornata V2'}
                            detail={
                                'I enjoy working with this keyboard. It makes enough clicking sound and you can customize ' +
                                'the colour of your choice. The only downside is that this keyboard is not fully supported in iOS.'
                            }
                        />
                    </div>
                    <div>
                        <GearCard
                            imageSrc={'/logitech_g403.png'}
                            title={'Logitech G403'}
                            detail={
                                "I got this as a gift from a colleague. It's simple and matches the colour of the keyboard."
                            }
                        />
                    </div>
                    <div>
                        <GearCard
                            imageSrc={'/sennheiser_pc37x.png'}
                            title={'Massdrop x Sennheiser PC37X Gaming Headset'}
                            detail={
                                'I typically do not need to wear headphones but I need them when I attend a meeting or my kid ' +
                                'running around the background. The only downside is that I cannot wear this for a long time (3~4 hours) straight.'
                            }
                        />
                    </div>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <h2>Software</h2>
                    <GearCard
                        imageSrc={'/jetbrain.png'}
                        title={'Jetbrains'}
                        detail={
                            'Although many developers will choose VS Code as a text editor, I really enjoy using Jetbrains. ' +
                            'It comes with multiple language supports and you do not tinker a lot to get it working. ' +
                            'Also, it works well with docker which I find very useful when the system is designed with microservice architecture.'
                        }
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default Gears;
