function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const formattedDate = getFormattedDate();

export const staticData = [
    { id: 1, from: 'mumbai', to: 'delhi', class: '1A', birth: 'GENERAL', date: formattedDate, train: 'NDLS Tejas Raj', img: "https://www.fabhotels.com/blog/wp-content/uploads/2019/07/Shatabdi-Express_600.jpg" },
    { id: 2, from: 'bihar', to: 'haryana', class: '2A', birth: 'TATKAL', date: formattedDate, train: 'garib rath', img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201907/garib_rath_660_072019120736.jpg" },
    { id: 3, from: 'chandigarh', to: 'simla', class: '3A', birth: 'DUTY PASS', date: formattedDate, train: 'vande bharat', img: "https://images.tribuneindia.com/cms/gall_content/2019/5/2019_5$largeimg27_Monday_2019_173859282.JPG" },
    { id: 4, from: 'delhi', to: 'manali', class: '1A', birth: 'GENERAL', date: formattedDate, train: 'Himalayan Queen', img: "https://enrichingjourneys.com/wp-content/uploads/2019/08/Toy-Train-3.jpg" },
    { id: 5, from: 'agra', to: 'delhi', class: '2A', birth: 'GENERAL', date: formattedDate, train: 'swaran exp', img: "https://st2.indiarailinfo.com/kjfdsuiemjvcya6/0/4/7/8/3525478/0/picsart061210693466.jpg" },
    { id: 6, from: 'delhi', to: 'banaras', class: '1A', birth: 'GENERAL', date: formattedDate, train: 'Poorva express', img: "https://himachaltourpackage.co.in/wp-content/uploads/2020/09/17014649848_ef9b32e3e9_b-e1550739071258.jpg" },
    { id: 7, from: 'delhi', to: 'kerala', class: '2A', birth: 'GENERAL', date: formattedDate, train: 'kalka-shimla', img: "https://himachaltourpackage.co.in/wp-content/uploads/2020/09/photos-2015-9-10-1-3-45.jpg" },
    { id: 8, from: 'delhi', to: 'patna', class: '1A', birth: 'GENERAL', date: formattedDate, train: 'amrit bharat express', img: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_46/1359152/357863.jpg" },
    { id: 9, from: 'delhi', to: 'chandigarh', class: '3A', birth: 'GENERAL', date: formattedDate, train: 'vande bharat express', img: "https://www.indiantravelstore.com/images/packages/1605591870_ezgif.com-gif-maker-(16).webp" },
    { id: 10, from: 'delhi', to: 'hydrabad', class: '2A', birth: 'GENERAL', date: formattedDate, train: 'sampark kranti express', img: "https://www.tripsavvy.com/thmb/IQrWq7eBp1dcbzBnI3Sc45b2ptg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-530091148-579848853df78ceb8606bd30.jpg" },
];
