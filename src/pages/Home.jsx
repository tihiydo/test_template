import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar";
import logo from '@/images/logo.webp';
import styles from '@/styles/Home.module.css'
import { MoveDown } from 'lucide-react';
import secondBlock from '@/images/secondBlock.png';

export default function Home() 
{

  return (
    <>
        <div className={styles.root}>
        <div className={styles.fblock}>
                <nav>
                    <img src={logo} className={styles.logo}/>
                    <div className={styles.navbar}>
                        <ul>
                            <li>Чому ми?</li>
                            <li>Партнери</li>
                            <li>Благодійність</li>
                            <li>Про нас</li>
                            <li>Drupal</li>
                        </ul>
                    </div>
                </nav>
                <div className={`${styles.firstBlock} pt-72 sm:pl-12 p-0 text-center sm:text-start `}>
                    <h5 className="font-bold">Вебстудія №1 з розробки сайтів</h5>
                    <h1 className="text-6xl font-extrabold" >Приєднуйтесь до нашої IT-команди</h1>
                    <h4 className="font-bold mt-5">Відкрийте нові перспективи чогось там чогось</h4>
                    <button className='mt-5'>Спробувати свої сили</button>
                </div>
                <div className={styles.readMore}>
                    <span>Дізнатися більше</span>
                    <MoveDown size={32} strokeWidth={2} />
                </div>
            </div>
            <div className={styles.secondBlock}>
                <h3 className="text-4xl font-bold mb-12">Перевірка тестового завдання</h3>
                <div className={`flex flex-wrap justify-center ${styles.secondBlockBody}`}>
                    <img className="w-120 flex items-center" src={secondBlock}></img>
                    <div class="flex-1">
                        <div className={`${styles.secondBlockBodyDescription}`}>Ми цінуємо ваш час та зусилля, тому намагаємося забезпечити оперативну відповідь.
на ваші тестові роботи. Наша команда керівників та співробітників займається
перевіркою усіх робіт ВРУЧНУ перевіряє всі роботи, гарантуючи високу якість оцінки.
На першому етапі вашу роботу перевірить керівник відділу розвитку талантів Олена.

Перевірку другого еталу, в залежності від посади на яку ви претендуєте, буде
здійснювати керівник відповідного відділу (наприклад, керівник відділу верстки у разі.
подання заявки на посаду верстальника).

Ми розуміємо, як важливо для вас отримати швидку відповідь, тому перевіряємо ваші
тестові завдання навіть після завершення робочого дня. Наша команда цінує кожного
потенційного кандидата ї робить усе можливе, щоб забезпечити ретельну оцінку.
ваших здібностей та швидко повідомити результат.
</div>
                    </div>
                </div>

            </div>
            <div className={styles.lastBlock}>
                <h3 className="text-4xl font-bold mb-5 mt-12 px-7">Найкраща компанія для роботи в IT</h3>
                <div className={`${styles.lastBlockBody}`}>
                <div class="p-6">
                    <h1 class="text-2xl font-bold mb-2">Вебстудія Глянець</h1>
                    <p class="text-base">
                        <b className='font-bold'>Команда, яка налічує понад 50 професіоналів.</b><br></br>Наша команда має власний офіс, хостинг, проводить навчання кадрів, здійснює контроль якості кожного проекту. За час своєї роботи ми розробили сотні інтернет-магазинів, які працюють у всіх країнах світу, продавши своїм замовникам тисячі товарів на добу.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}