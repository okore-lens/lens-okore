const text =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur molestiae perferendis corporis repudiandae? Aspernatur sunt obcaecati corrupti rem. Recusandae nemo ipsam consequatur deserunt minima iusto quisquam ducimus nesciunt eaque quos itaque eos mollitia laborum aperiam corrupti tenetur, voluptatibus assumenda animi non quae, alias maxime eveniet? Laboriosam, maxime, non illo tempora atque sit consectetur laborum, voluptate doloremque dolore aliquid modi libero sed eius labore qui veniam perspiciatis itaque! Recusandae aspernatur tempora, sint voluptates nulla quidem debitis aliquam expedita qui. Quia ullam sunt consectetur deleniti suscipit quod laudantium ratione facere a, sint eum dicta. Dolorem possimus adipisci quaerat veniam? Eos perferendis quia voluptatibus corporis magnam atque, accusantium doloribus suscipit quam perspiciatis nobis, nemo deserunt. Expedita eum itaque rem, vel error voluptatem. Deleniti minima labore optio nisi, dolorem eos! Repellat provident ratione earum dignissimos aliquam est magni dolorum commodi cupiditate, facilis molestiae cumque temporibus ipsam ipsum doloribus odio similique deleniti id veniam aperiam iste eum reprehenderit. Dolores enim officia quisquam! Possimus aperiam commodi, omnis quibusdam cupiditate doloremque eveniet ut accusantium temporibus facere delectus cumque quidem deserunt laudantium dignissimos quas repudiandae! Animi sint enim est, recusandae sed vero minima doloremque repellat quasi ratione, illo explicabo? Laboriosam quis optio, aliquid ipsam quidem consequuntur accusamus, officia suscipit vel praesentium, temporibus quaerat! Aliquid dolor tempora a, illo fuga corrupti dolorum unde mollitia quia itaque nulla quibusdam repellendus minus officiis cumque minima distinctio perspiciatis vero magni totam, voluptates id reprehenderit nisi ipsa! Corporis officia sunt illo amet molestias modi perferendis, debitis ab ipsa eum ipsam incidunt dolor, rerum nam, minus eligendi quibusdam autem et pariatur dolorem dignissimos veritatis mollitia ducimus earum. Tempora mollitia omnis itaque eius magnam laborum praesentium sit ipsum totam commodi laboriosam quo temporibus non ullam, numquam debitis asperiores nostrum consectetur quidem voluptatem recusandae cum porro. Rem, suscipit facere delectus earum perspiciatis ducimus. Veritatis, pariatur officia eveniet nesciunt nisi itaque quasi sequi unde consectetur doloremque id quis natus cumque magnam dolores quas mollitia ab. Veniam expedita, eligendi reiciendis laborum quae quo maiores iusto, reprehenderit dolorum explicabo perferendis dolore commodi aliquid ea sequi cum a porro libero est ex aperiam quis illo voluptatem sapiente. At, eum architecto praesentium autem fuga illo eaque dolorem totam veritatis expedita fugit, quis distinctio molestiae ducimus dolores ipsa doloremque hic saepe rem aliquam! Qui soluta, iusto dignissimos sequi, obcaecati ex porro eum culpa at, laudantium earum quasi quod cupiditate libero tempora dolorum. Expedita incidunt sequi mollitia harum recusandae voluptas. Soluta voluptatem minus atque iure voluptatibus architecto provident harum, veniam, neque accusamus repellendus itaque ipsum maiores! Quibusdam qui, vero totam praesentium ad voluptatibus cumque blanditiis dolor repudiandae a minus libero culpa ipsa fuga numquam odio similique et ratione optio sunt! Voluptatibus beatae dolor et temporibus?";

interface BlogProps {
  title: string;
  text: string;
  image: string;
}

const blogArray: Array<BlogProps> = [
  {
    title: "Javascript Fundamentals",
    text: text,
    image:
      "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    title: "UI/UX Architecture",
    text: text,
    image:
      "https://images.unsplash.com/photo-1604074131228-9d48b811bd80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default blogArray;
