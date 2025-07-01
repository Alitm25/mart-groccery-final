import {Section} from "@/components/section/Section";
import {Banner} from "@/components";

export default function Home() {
  return (
      <Section>
        <Banner title={'Don’t miss amazing grocery deals'} subTitle={'Sign up for the daily newsletter'} bgImage={'/assets/images/banner_bg.png'} image={'/assets/images/fresh-apples.png'}/>
      </Section>
  );
}
