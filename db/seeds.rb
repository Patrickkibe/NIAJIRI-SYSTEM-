puts '🌱 Seeding Niajiri...'

cust1 = Customer.create ({

    username: "Patrick Kibe",
    email_address: "phantickibe01@gmail.com",
    phone: 741856038,
    password: "patrick123456",
})

cust2 = Customer.create ({

    username: "Alma Mutheu",
    email_address: "a mutheu@gmail.com",
    phone: 703910147,
    password: "Almamutheu",
}
)

staff1 = Staff.create({
      name: "Stacy Wanjiru",
      location: "Nairobi,Uthiru",
      image: "https://divasbeautyspot.co.ke/wp-content/uploads/2022/08/hair-cuts-3.jpg",
      profession: "Hairstylist, Saloonist",
      phone_number: 789045678,
    }
),

staff2 = Staff.create({
        name: "Steve Mueni",
        location: "Nakuru CBD",
        image: "https://www.kenyans.co.ke/files/styles/article_style/public/images/media/mobile%20barber.jpg?itok=i9TA_RYn",
        profession: "Barber",
        phone_number: 767845627,
    }
)

staff3 = Staff.create({
        name: "Valentine Chepkoech",
        location: "Eldoret CBD",
        image: "https://cdn.standardmedia.co.ke/images/wednesday/thumb_how_i_started_my_cat5cee61da64711.jpg",
        profession: "Caterer",
        phone_number: 756432190,
    }
)

staff4 = Staff.create ({
        name: "Victor Odhiambo",
        location: "Kisumu CBD",
        image: "https://media.licdn.com/dms/image/C4D03AQGQ2IUnESAnlw/profile-displayphoto-shrink_800_800/0/1647709970401?e=2147483647&v=beta&t=AMS4sPHFaZWjW0S_1rzOS9lcQAc0HR0ahnizcs-S8XE",
        profession: "Mechanic",
        phone_number: 756222109,
    }
)

staff5 = Staff.create ({
        name: "Mary Wanjala",
        location: "Kitale CBD",
        image: "https://media.licdn.com/dms/image/C4E03AQFRJQmVM0zZfg/profile-displayphoto-shrink_800_800/0/1644390235439?e=2147483647&v=beta&t=6gET73CxBDIeS7fM3iJ1Dlg7TfSz1nKMRPDPSKcybJI",
        profession: "Massuse",
        phone_number: 720487326,
    }
)

staff6 = Staff.create ({
        name: "Nicholas Omar",
        location: "Mombasa CBD",
        image: "https://media.licdn.com/dms/image/C5122AQFL1-y9mmy_sQ/feedshare-shrink_800/0/1574575497591?e=2147483647&v=beta&t=NcvYzQ6pjyfIo4K7LwQIbEcXrKZ54NRqYGZH5mxJFiI",
        profession: "Chef",
        phone_number: 798766674,
    }
)

staff7 = Staff.create ({
        name: "Mary Waithera",
        location: "Nairobi CBD",
        image: "https://victormatara.com/wp-content/uploads/2018/05/List-Of-High-End-Beauty-Parlors-Kenyan-Celebrities-Love-To-Frequent-2.jpg",
        profession: "Hairdresser",
        phone_number: 778432189,
    }
)

puts "Successfully Seeded to the database"