interface Props {
    description: string;
};

export function InfoBody({description}: Props) {
    return (
        <div className={'flex flex-col items-start justify-between '}>
            {
                description ?
                <div className={'font-lato text-base font-normal text-[#7E7E7E] text-left whitespace-pre'}>
                    {description}
                </div>
                :
                <div className={'font-lato text-base font-normal text-[#7E7E7E] text-left'}>
                    <p className={'whitespace-pre-line'}>
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                    </p>
                </div>
            }
        </div>
    );
};