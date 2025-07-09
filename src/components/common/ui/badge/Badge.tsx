interface Props {
    label: string | null;
    price: number;
    sale_price?: number;
};

export function Badge({label = '', price, sale_price}: Props) {
    return (
        <div>
            {
                label.length > 0 ?
                    <div className={`badge ${label == 'Hot' ? 'badge--hot' : 'badge--sale'} absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{label}</div>
                    : (
                        sale_price ? <div className="badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none">-{Math.round((sale_price / price) * 100)}%</div>
                            : <></>
                    )
            }
        </div>
    );
};