'use client';

import { BurgerMenu } from '@/components/BurgerMenu/BurgerMenu';

// import { Button } from '@/components/Button';
// import { NavBar } from '@/components/NavBar/NavBar';
import { Element } from 'react-scroll';

import { FeedbackCard } from '@/components/FeedbackCard';
import feedbackData from '@/data/feedback.json';
import { useState } from 'react';

const Page = () => {
  const data = feedbackData.feedback;

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const onClose = () => setIsBurgerOpen(false);

  return (
    <>
      <div className="max-w-[480px] w-full mx-auto bg-green-400 md:max-w-[768px] xl:max-w-[1280px]">
        <p className="mb-[20px]">Stepan&apos;s test page</p>
        <button
          type="button"
          onClick={() => setIsBurgerOpen(true)}
          className="p-[10px] border-2"
        >
          open modal
        </button>
        {/* ---------------------------------------------------Btn--------------------------------------------------- */}
        {/* <Button
          type="submit"
          onClick={() => {
            console.log('hi');
          }}
          isSubmitted={false}
          isSubmitError={false}
          disabled={false}
        >
          Read more
        </Button> */}
        {/* ---------------------------------------------------NavBar--------------------------------------------------- */}

        {/* <NavBar />

        <Element name="test1" className="requestSection">
          <div className="mt-[50px] h-[1000px] bg-green-500">
            requestSection
          </div>
        </Element>
        <Element name="target" className="reviewsSection">
          <div className="h-[1000px] bg-red-400">reviewsSection</div>
        </Element>
        <Element name="target" className="feedbackSection">
          <div className="h-[1000px] bg-blue-600">feedbackSection</div>
        </Element> */}
        {/* ---------------------------------------------------FeedbackCard--------------------------------------------------- */}

        {/* <FeedbackCard data={data1}/> */}
        {/* ---------------------------------------------------Modal--------------------------------------------------- */}

        {data.map(item => {
          return (
            <div key={item.name} className="mb-[20px]">
              <FeedbackCard data={item} />
            </div>
          );
        })}

        {/* ---------------------------------------------------BurgerMenu--------------------------------------------------- */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          similique consequuntur nulla. Dolorem, adipisci tempora. Modi eos
          obcaecati deserunt numquam. Beatae velit, dicta possimus omnis enim
          ipsa placeat. Beatae dignissimos, voluptate ad nemo optio ipsam
          aspernatur totam velit natus tenetur sit architecto aliquam nobis quia
          ex! Voluptatem dolores commodi quisquam exercitationem sint tempore
          molestias minus aut cupiditate facere saepe aliquam odio, quae at,
          sequi eveniet repudiandae totam optio? Deleniti assumenda consequatur
          ipsum iste, dolores provident libero odio dolorem voluptatibus
          voluptatem nostrum impedit porro quia sapiente inventore fugit. Culpa
          reprehenderit at quis, corporis maxime cumque dolorum, commodi
          perferendis accusamus alias animi quod ex, ipsam quam? Repellendus
          hic, voluptas dolorem assumenda tempore neque rem blanditiis mollitia
          minus porro omnis fugit reiciendis quo unde soluta perferendis
          cupiditate, numquam ea! Saepe, ad illum tenetur repudiandae laudantium
          excepturi ex perferendis cupiditate libero. Quae assumenda omnis,
          facilis tempora quas maxime qui est magni labore quisquam hic, officia
          autem alias doloremque, repudiandae incidunt nesciunt blanditiis
          ullam. Provident vel voluptatem sunt impedit iste labore asperiores
          nobis quibusdam? Fugiat repudiandae eligendi debitis ullam ratione
          blanditiis? Error deserunt officia suscipit ullam unde dolorum
          voluptas repudiandae alias, animi fugit ipsa voluptatem modi. Rerum
          culpa reprehenderit, ullam quam beatae consequatur laborum doloribus
          maxime sed voluptatibus adipisci molestiae sapiente, eaque natus
          saepe? Enim incidunt totam nobis, quam quod fuga iste debitis aperiam
          accusamus unde odit quidem, sequi dignissimos id nesciunt earum
          blanditiis asperiores. Ipsum officiis modi mollitia voluptates aperiam
          distinctio eligendi ex deleniti obcaecati ab, laboriosam ad aliquam id
          expedita nulla nihil odit, maxime dolore earum a nam beatae. Molestias
          eius sapiente non harum. Architecto sit reprehenderit non provident
          dolorem ab accusantium, aspernatur dolor repellendus rem quae eaque,
          eius, ipsum quisquam cupiditate maiores. Fuga facere mollitia, itaque
          id expedita perspiciatis dignissimos. Quos repellendus aspernatur
          dignissimos temporibus corporis, assumenda minima quia, sapiente
          ratione distinctio, quam in vero nulla! Debitis, eum. Facilis repellat
          sequi, quos illo corrupti reiciendis quas ex perferendis commodi,
          minima vero cumque iusto nobis odit quam reprehenderit maiores tenetur
          quod consectetur quisquam doloribus at deserunt. Fuga, aspernatur
          maiores dolorum sequi quia hic cumque voluptatum nobis debitis id.
          Dolorem dignissimos molestiae mollitia voluptatum voluptates, velit
          deserunt animi est quis perferendis tempore ut in ipsa recusandae
          quaerat error! Eligendi cupiditate porro quibusdam adipisci molestias,
          repudiandae autem. Porro numquam sapiente dolore aliquam temporibus
          sed nemo quis optio deleniti necessitatibus placeat aperiam et
          inventore veniam, aliquid veritatis fuga animi voluptas quo. Odit esse
          ducimus nulla amet velit repellat unde quae fuga at qui, modi
          voluptates similique recusandae eligendi itaque fugiat perferendis
        </p>
        <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />

        <Element name="test1" className="requestSection">
          <div className="mt-[50px] h-[1000px] bg-green-500">
            requestSection
          </div>
        </Element>
        <Element name="target" className="reviewsSection">
          <div className="h-[1000px] bg-red-400">reviewsSection</div>
        </Element>
        <Element name="target" className="feedbackSection">
          <div className="h-[1000px] bg-blue-600">feedbackSection</div>
        </Element>
      </div>
    </>
  );
};

export default Page;
