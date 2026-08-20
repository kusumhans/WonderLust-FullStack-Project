const sampleListings = [
    {
        title: "Beautiful Beach House",
        description: "A beautiful house near the beach with an amazing ocean view.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        price: 2500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Mountain Retreat",
        description: "A peaceful stay surrounded by beautiful mountains and fresh air.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 3200,
        location: "Manali",
        country: "India"
    },
    {
        title: "Luxury City Apartment",
        description: "Modern apartment located in the heart of the city.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        price: 4500,
        location: "Mumbai",
        country: "India"
    },
    {
        title: "Cozy Cottage",
        description: "A cozy cottage surrounded by pine trees and peaceful landscapes.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        price: 2800,
        location: "Shimla",
        country: "India"
    },
    {
        title: "Lake View Villa",
        description: "Relax in a beautiful villa overlooking a peaceful lake.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        price: 5200,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Forest Wooden Cabin",
        description: "A charming wooden cabin surrounded by dense green forests.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        price: 3500,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Royal Heritage Haveli",
        description: "Experience traditional Indian hospitality in a beautiful heritage haveli.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        price: 6000,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Riverside Retreat",
        description: "A peaceful property located beside the flowing river.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 3000,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Luxury Palace Stay",
        description: "Stay like royalty in this luxurious palace-inspired property.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        price: 8500,
        location: "Jodhpur",
        country: "India"
    },
    {
        title: "Desert Camp",
        description: "Enjoy an unforgettable night under the stars in the desert.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        price: 2200,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Backwater Villa",
        description: "Beautiful villa surrounded by Kerala's peaceful backwaters.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        price: 4800,
        location: "Alleppey",
        country: "India"
    },
    {
        title: "Hilltop Homestay",
        description: "Wake up to spectacular views from this hilltop homestay.",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
        price: 2700,
        location: "Mussoorie",
        country: "India"
    },
    {
        title: "Modern Beach Villa",
        description: "A stylish villa just a short walk from the beach.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        price: 5500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Valley View Cottage",
        description: "A peaceful cottage offering breathtaking valley views.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 3100,
        location: "Manali",
        country: "India"
    },
    {
        title: "Lake Palace Apartment",
        description: "Comfortable apartment with beautiful views of the surrounding lake.",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
        price: 3900,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Snowy Mountain Lodge",
        description: "Warm and comfortable lodge perfect for a winter getaway.",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
        price: 4200,
        location: "Gulmarg",
        country: "India"
    },
    {
        title: "Colonial Era Cottage",
        description: "Beautiful colonial-style cottage with classic architecture.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 3600,
        location: "Shimla",
        country: "India"
    },
    {
        title: "Coastal Homestay",
        description: "A comfortable homestay close to the sea and local markets.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        price: 1800,
        location: "Pondicherry",
        country: "India"
    },
    {
        title: "Luxury Forest Resort",
        description: "Relax in a premium resort surrounded by nature.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        price: 6500,
        location: "Jim Corbett",
        country: "India"
    },
    {
        title: "Countryside Farmhouse",
        description: "A spacious farmhouse perfect for a relaxing countryside vacation.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        price: 4000,
        location: "Lonavala",
        country: "India"
    },
    {
        title: "Sunset Beach Cottage",
        description: "Enjoy stunning sunsets from this charming beach cottage.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        price: 2900,
        location: "Varkala",
        country: "India"
    },
    {
        title: "Mountain View Resort",
        description: "Comfortable rooms with panoramic views of the Himalayas.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 4700,
        location: "Nainital",
        country: "India"
    },
    {
        title: "Heritage Haveli",
        description: "Traditional haveli offering an authentic Rajasthan experience.",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
        price: 5000,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Urban Luxury Home",
        description: "Elegant modern home located close to major city attractions.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        price: 5800,
        location: "Delhi",
        country: "India"
    },
    {
        title: "Garden Villa",
        description: "Spacious villa with a beautiful private garden.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        price: 4400,
        location: "Bengaluru",
        country: "India"
    },
    {
        title: "Tea Garden Retreat",
        description: "Stay among beautiful tea gardens and enjoy the peaceful surroundings.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 3300,
        location: "Darjeeling",
        country: "India"
    },
    {
        title: "Himalayan Homestay",
        description: "A simple and comfortable homestay in the Himalayan hills.",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
        price: 2100,
        location: "Kasol",
        country: "India"
    },
    {
        title: "Rooftop City Apartment",
        description: "Modern apartment with a beautiful city skyline view.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        price: 3800,
        location: "Hyderabad",
        country: "India"
    },
    {
        title: "Tropical Garden House",
        description: "Relax in this peaceful tropical house surrounded by greenery.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        price: 2600,
        location: "Kochi",
        country: "India"
    },
    {
        title: "Cliffside Retreat",
        description: "Spectacular cliffside accommodation overlooking the Arabian Sea.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        price: 6200,
        location: "Varkala",
        country: "India"
    },
    {
        title: "Peaceful Lake Cottage",
        description: "A quiet cottage perfect for couples and families.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        price: 3400,
        location: "Nainital",
        country: "India"
    },
    {
        title: "Royal Jaipur Residence",
        description: "A luxurious residence inspired by Jaipur's royal architecture.",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
        price: 7200,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Goan Portuguese Villa",
        description: "Beautiful Portuguese-style villa close to Goa's famous beaches.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        price: 5100,
        location: "Goa",
        country: "India"
    },
    {
        title: "Riverside Camping",
        description: "Enjoy a peaceful camping experience beside the river.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 1600,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Luxury Hillside Villa",
        description: "Premium villa with panoramic mountain views and modern amenities.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 7000,
        location: "Mussoorie",
        country: "India"
    },
    {
        title: "Kerala Coconut House",
        description: "Traditional Kerala home surrounded by coconut trees.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        price: 2300,
        location: "Kumarakom",
        country: "India"
    },
    {
        title: "Desert Luxury Tent",
        description: "A premium desert tent with traditional Rajasthani hospitality.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        price: 4500,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Forest Treehouse",
        description: "Unique treehouse surrounded by beautiful forest scenery.",
        image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        price: 3900,
        location: "Wayanad",
        country: "India"
    },
    {
        title: "Luxury Goa Apartment",
        description: "Modern apartment with a swimming pool and beach access.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        price: 4600,
        location: "Calangute",
        country: "India"
    },
    {
        title: "Snow Valley Cabin",
        description: "Cozy cabin surrounded by snow-covered mountains.",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
        price: 3600,
        location: "Auli",
        country: "India"
    },
    {
        title: "Royal Udaipur Villa",
        description: "Elegant villa offering beautiful views of Udaipur's lakes.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        price: 6800,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Beachfront Kerala Resort",
        description: "Relaxing beachfront resort with comfortable rooms and ocean views.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        price: 5500,
        location: "Kovalam",
        country: "India"
    },
    {
        title: "Himalayan Wooden Home",
        description: "Traditional wooden home with stunning mountain surroundings.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 2900,
        location: "Manali",
        country: "India"
    },
    {
        title: "Modern Pune Villa",
        description: "Spacious modern villa ideal for families and groups.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        price: 4300,
        location: "Pune",
        country: "India"
    },
    {
        title: "Old Delhi Heritage Home",
        description: "Experience the culture and history of Delhi from this heritage home.",
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
        price: 3000,
        location: "Delhi",
        country: "India"
    },
    {
        title: "Darjeeling Hill Cottage",
        description: "Cozy cottage with beautiful views of the surrounding tea gardens.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 2800,
        location: "Darjeeling",
        country: "India"
    },
    {
        title: "Lonavala Weekend Villa",
        description: "Perfect weekend getaway surrounded by green hills and waterfalls.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        price: 4800,
        location: "Lonavala",
        country: "India"
    },
    {
        title: "Andaman Beach Resort",
        description: "Beautiful island resort with crystal-clear water and private beach access.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        price: 7500,
        location: "Andaman",
        country: "India"
    },
    {
        title: "Munnar Tea Estate Stay",
        description: "Peaceful stay surrounded by the famous tea plantations of Munnar.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 3400,
        location: "Munnar",
        country: "India"
    },
    {
        title: "Coorg Coffee Plantation Home",
        description: "Relax in a beautiful home surrounded by lush coffee plantations.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
        price: 3100,
        location: "Coorg",
        country: "India"
    },
    {
        title: "Luxury Rishikesh Retreat",
        description: "Premium riverside retreat perfect for relaxation and adventure.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 5900,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Sikkim Mountain Lodge",
        description: "Comfortable mountain lodge with spectacular Himalayan views.",
        image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
        price: 3700,
        location: "Gangtok",
        country: "India"
    },
    {
        title: "Kashmir Valley House",
        description: "Beautiful traditional house surrounded by Kashmir's scenic valleys.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 4100,
        location: "Srinagar",
        country: "India"
    },
    {
        title: "Luxury Mumbai Sea View",
        description: "Premium apartment offering stunning views of the Arabian Sea.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        price: 8000,
        location: "Mumbai",
        country: "India"
    }
];

module.exports = { data: sampleListings };