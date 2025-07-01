import { twMerge } from 'tailwind-merge'

interface Props {
    sectionClassName?: string;
    children: React.ReactNode;
};

export function Section({ sectionClassName, children}: Props) {
    return (
        <section className={twMerge('container mb-[68px]', sectionClassName)}>
            {children}
        </section>
    );
};