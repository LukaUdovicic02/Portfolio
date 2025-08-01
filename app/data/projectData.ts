import ReactIcon from "@/public/images/icon-react.png";
import TailwindIcon from "@/public/images/icon-tailwind.png";
import NetIcon from "@/public/images/icon-net.png";
import TsIcon from "@/public/images/icon-ts.png";
import AzureIcon from "@/public/images/icon-azure.png";
import JavaIcon from "@/public/images/icon-java.png";
import GitHubIcon from "@/public/images/icon-github.png";
import UnityIcon from "@/public/images/icon-unity.png";
import AwsIcon from "@/public/images/icon-aws.png";
import AndroidIcon from "@/public/images/icon-android.png";
import DbIcon from "@/public/images/icon-db.png";
import DineEaseBG from "@/public/images/DineEaseBG.png";
import VRCS from "@/public/images/VRCS.png";
import SmartGym from "@/public/images/smartGym.png";
import UImage from "@/public/images/UI-image.png";
import UImage2 from "@/public/images/UI-image2.png";
import UImage3 from "@/public/images/UI-image3.png";
import IImage from "@/public/images/I-Image.png";
import IImage2 from "@/public/images/I-Image2.png";
import IImage3 from "@/public/images/IImage3.png";
import IImage4 from "@/public/images/IImage4.png";
import IImage5 from "@/public/images/IImage5.png";
import IImage6 from "@/public/images/IImage6.png";
import ArchitectureImage from "@/public/images/projectImages/ArchitectureImage.png";
import BackendArchitecture from "@/public/images/projectImages/BackendArchitecture.png";

export const projectData = () => [
  {
    id: "1",
    title: "DineEase - Bachelor Project",
    desc: "Simplify restaurant reservations with ease. Designed to help both managers and customers streamline the booking process for a smoother dining experience.",
    image: DineEaseBG,
    skills: [
      ".NET C#",
      "React.js",
      "RESTful",
      "WebAPI",
      "Entity Framework Core",
      "Typescript",
      "TailwindCSS",
      "Scrum",
      "Azure Blob Storage",
      "Azure Container Registry",
      "Azure Web App",
      "Azure SQL Database",
      "CI/CD",
      "Docker",
      "JWT",
    ],
    technologies: [
      " Intelij",
      "VSCode",
      "Docker",
      "Astah",
      "Postman",
      "Git",
      "Github",
      "Jira",
      "Trello",
    ],
    icons: [NetIcon, TailwindIcon, TsIcon, ReactIcon, AzureIcon],
    github: "https://github.com/LukaUdovicic02/BPR2",
    details: [
      {
        title: "Introduction",
        content: `A recent study by TouchBistro indicates a notable increase in the frequency of dining out,
                 with nearly half of consumers reporting eating at restaurants 2-4 times per week. The report
                 highlights the growing influence of social factors, such as recommendations from friends and
                 online reviews, on dining decisions. In particular, millennials appear to rely heavily on online
                 feedback, with 67% of respondents indicating that they consider reviews when selecting new
                 dining spots (Krook, 2023).

                 Users often rely on fragmented sources of information, such as online reviews,
                 recommendations from friends, or simply walking in without prior knowledge (Smith &
                 Johnson, 2021). This fragmented approach not only lacks convenience but also makes the
                 overall dining experience worse.

                 Moreover, with the increasing trend of urbanization and globalization, people are frequently
                 traveling to different cities for work or leisure. “By 2050 more than two-thirds of the world's
                 population is projected to be living in urban areas” (Palanivel, 2017).

                 This urban growth has been accompanied by a significant increase in international tourism,
                 with the number of international trips more than doubling since the start of the millennium
                 (Bastian Herre and Veronika Samborska, 2023). In a new city, they often face the challenge
                 of finding suitable dining options that match their preferences and dietary requirements. This
                 can be frustrating, especially when unfamiliar with the local dining cuisine (Travelavidly,
                 2024).

                 It's no secret that nowadays most luxurious restaurants are using some kind of booking
                 system, which can help clients get a reservation upfront and securely. A booking system
                 must be a reliable and easy-to-use system so that anyone can utilize it without the need for
                 extensive guidance. “Most modern restaurants work with reservation software. People can
                 easily view and book available tables online or via an app, and the't need to call to
                 modify or cancel their reservation.” (Smaddalena, 2024).“Whether a guest is inspired by a 
                 food post on Instagram, exploring options on Google
                Maps, or browsing a restaurant's website, they can act on that impulse immediately.”
                (Tablein Team, 2024).
                
                In the restaurant business customer satisfaction is a priority, making it easier and enjoyable
                for the customers to find out more about the place and book a stay, which leads to less effort
                and errors for the restaurant management. “Until the late 1990s, all reservations were taken
                over the phone and manually recorded in a reservation log. Guests dealt with busy signals,
                double-booked tables, and transcription errors. In spite of these issues, some restaurants
                still do it this way.” (Smaddalena, 2024).

                For restaurants, the inefficiencies in reservation management can lead to lost revenue and
                decreased customer satisfaction. During peak hours, traditional reservation methods may
                result in long wait times for walk-in customers or overbooking, causing chaos and frustration
                for both staff and patrons. Additionally, without a centralized and efficient system,
                restaurants may struggle to gather and utilize valuable customer data for personalized
                experiences and targeted marketing efforts (Harrison & Smith, 2020).

                There are still many restaurants in Denmark that do not use a booking system at all, they
                mostly rely on the reservations taken manually over the phone. This gives many limitations
                to the customers, as it is not the most efficient way to reserve a place. Lack of real-time
                availability or booking for days ahead can bring many challenges for both clients and
                restaurant management (Plazn, 2023). This also includes more waiting time, and difficulty in
                finding available slots, and in the end, it could end up messing up the appointments. As of
                today, several websites are used across the world to book a table such as “OpenTable” or
                “Dinnerbooking”. For example, OpenTable, a popular reservation platform, lists only around
                13 restaurants in Denmark, suggesting that many venues in the country may not utilize such
                services (opentable, 2024). In Denmark, the most used are “earlybird” and
                “easyTableBooking”.

                The existing solutions in the market, such as standalone restaurant reservation platforms or
                review websites, fail to address these challenges comprehensively. They often lack
                integration, personalization, and real-time capabilities, leaving room for improvement in
                      
                enhancing the dining experience (Anderson & Brown, 2019). The problem with these
                solutions is that they only offer a limited number of restaurants, the most probable cause
                could be the cost of such big systems to use. For cafes and smaller restaurants, the high
                cost is a dealbreaker which is why many prefer to use the old ways.

                By improving the reservation system, restaurants can get more customers and be more
                efficient. It's important to use digital solutions to meet modern customer demands and
                provide a seamless dining experience.`,
      },
      {
        title: "Requirements",
        content: `As a user, I want to register using my credential so that I can access the system

                  As a customer, I want to log in using my credentials, so that I can access my account

                  As a customer, I want to recover my password if I forget it so that I can regain access to my account

                  As a restaurant owner, I want to log in using my credentials so that I can manage my restaurant dashboard

                  As a restaurant owner, I want to recover my password if I forget it so that I can regain access to my account.

                  As a restaurant owner, I want to create my restaurant profile so that customers can view my restaurant details.

                  As a customer, I want to search for restaurants by city and filter my search so that I can find options that suit my preferences.

                  As a customer, I want to be able to view the restaurant profile, so I can see all the restaurant details      

                  As a customer, I want to view the search results on a map so that I can easily see their locations visually 

                  As a customer, I want to make a reservation at a restaurant so that I can secure my spot in advance.

                  As a customer, I want to modify or cancel my reservation so that I can update my plans.

                  As a customer, I want to be able to update my profile information so that I can ensure my details are correct and up to date.

                  As a restaurant owner, I want to view all upcoming reservations so that I can manage bookings effectively.

                  As a restaurant owner, I want to be able to manage my restaurant profile, so that I can keep my restaurant information up to date. 

                  As a customer, I want to receive notifications about my reservations so that I am informed of updates.

                  As a restaurant owner, I want to receive emails about reservation activity so that I can stay updated.

                  As a restaurant owner, I want to ensure my reservations do not exceed capacity so that operations run smoothly.

                  As a restaurant owner, I want to set table availability and booking preferences so that customers can make reservations.

                  As a restaurant owner, I want to block unavailable time slots so that customers cannot book during those times.

                  As a customer, I want to leave reviews and ratings after visiting a restaurant so that I can share my feedback.

                  As a restaurant owner, I want to respond to reviews so that I can address feedback or concerns.`,
      },
      {
        title: "System Architecture",
        content: `Displays the system architecture. The System architecture is design with having React.js as frontend framework using Typescript  and .NET C# as the backend for the system.Both frontend and backend are wrapped into the container using Docker. The React.js frontend is used as the user interface for the system and communicates with the backend through a REST API.Backend uses CLEAN architecture and it handles all the business logic and operations necessary for the system. Docker files are inside of both frontend and backend and are used to form the application into the container ready for deployment.

                The backend interacts with multiple outside services to provide extra functionality for the system.There are different external services that backend is managing , for image storage for what is utilised Azure Blob Storage to safely and securely store images.For the location functionality is utilises MapBox Location API to fetch requested information regarding mapping. For the data storage database Azure SQL Database is used to store the data and manage it in a safe manner.Also MailTrap email service is used to handle email for sending notifications about reservation.

                To automate the process for deployment , the project is integrated with GitHub Actions that is automating the CI/CD workflow of the system. Whenever a push or pull request is made to the main branch in the GitHub repository , the pipeline is triggered , triggering the workflow. The workflow starts by Logging in to Azure with required credentials that are safely stored at GitHub Secrets. After all the authentication is finished with Azure credentials it proceeds to build the Docker images for both of the images , so for backend and frontend, it reads it from the GitHub repository finding its location.One the images are build they are pushed to the Azure Container Registry where they are stored for deployment.

                Next, pipeline is performing the final step that is deployment by pushing the docker images to the Azure Web Apps. The deployment process creates two separate web applications each of them hosting docker images , one for backend and one for frontend.

                The whole process of the Continuous Integration (CI) and Continuous Deployment (CD) is automated , reducing manual work and ensuring less error will be made by developers and providing more consistency.
                `,
        images: [ArchitectureImage],
      },
      {
        title: "CLEAN Architecture",
        content: `Displays the design of the backend system.The system follows the clear separation of responsibilities.The WebAPI layer serves as entry point , where in this example ReservationController handle API requests and it will interact with the Application Layer, the IReservationsLogic interface is implemented by ReservationLogic class, which contains the logic for handling reservations. This layer also handles and interacts with the Services, such as ReservationEmailService and EmailService, for handling email notification.
                  The system follows key principles of SOLID , such as Single Responsibility , Interface Segregation and Liskov Substitution. Single Responsibility Principle was followed by having each of the classes to be responsible for a specific part of the functionality. Interface Segregation principle was followed by having defined only required methods in the interfaces , avoiding having big bloated interfaces. Liskov Substitution Principle was followed to ensure that for example derived classes , such as ReservationLogic can replace the IReservationLogic without changing behavior expected by the rest of the system.
                  The Application layer depends on the EfcDataAccess layer, where the ReservationsEfcDao interacts with the database through the ReservationContext.This makes sure that data is retrieved and persisted , which is following the Dependency Rule , relying on abstractions like IReservationsDao.Also the backend uses Domain entities such as Reservation and its data access objects such as ReservationDto and ReservationNotificationDto, which is core data structure and its also reused across the layers.
                  

                  By applying the Clean Architecture to the backend, it ensures that the key principles are applied.This approach allows the logic to be independent of the external services such as databases or user interface frameworks, also it makes it easier to integrate additional functionality which improves the maintainability of the codebase.
                `,
        images: [BackendArchitecture],
      },
      {
        title: "UI Design",
        content: ``,
        images: [UImage, UImage2, UImage3],
      },
      {
        title: "Implementation",
        content: ``,
      },
      {
        title: "Authentication - Frontend",
        content: `Shows an Auth useState hook initialises the auth state by taking the JWT token from localStorage. setAuth function checks if the user is authenticated by checking if the token exists and if it exists then the user is authenticated and role and id are extracted from the token and set for the user useState. If the auth is false then it will clear the user useState , remove the token from the localStorage and reset the authentication.`,
        images: [IImage],
      },
      {
        title: "Authentication - Backend",
        content: `Explains the process of Login in the logic layer.
                  Starting off with the LogicUser method that is validating the user and if the user exists gives it to the GenerateJwt method.
                  The GenerateJwt method is called to create a list of claims that represent the user's data.SymmetricSecurityKey is a key that is created using _jwtKey that is taken from the environment variable.The key is used to sign JWT using an algorithm which will ensure the authenticity of the token.JwtHeader contains the signing credentials , specification of the algorithm that is used. Payload contains claims, and additional data. A JwtSecurityToken object is called that will take in the Header and Payload.Then the token is being serialised into the string format using the JwtSecurityTokenHandler().WriteToken which returns the final JWT token.
                  GenerateClaims method generates the claims about the user and some additional data and returns it as a list.
                 `,
        images: [IImage2],
      },
      {
        title: "Update reservation - Frontend",
        content: ` shows an updateDialog component that provides a user interface for updating reservation details. It utilizes useState to manage the input from the form, and when submitted it calls this handleUpdate function which makes a reservation object that is sent to backend through onUpdateSuccess function , if successful then calls the API , otherwise it will display an error.`,
        images: [IImage3, IImage4],
      },
      {
        title: "Update reservation - Backend",
        content: `displays an PUT endpoint that is handling the reservation update. It validates the request by checking the id , then it calls the logic layer to update the reservation , then it retrieves the updated reservation and prepares a notification DTO. Sends an email notification , if any error is caught it will return 500 Status code and print it out.`,
        images: [IImage5, IImage6],
      },
      {
        title: "Project future",
        content: `The project is missing five planned requirements , so the next logical step would be to implement those missing ones.Also new features could be added if in the future there are customers that require certain requirements , perhaps quality of life changes.
                 Regarding the frontend , the group could've made custom user interface design with good responsiveness for different screens with figma , also server side rendering could be added using technology such as Next.js.Also frontend deployed application that should not have any console.log due to security risks.
                 When it comes to the backend , a lot of optimisation could've been done in the database such as making better LINQ in order to have faster time or retrieving data. Adhere to all of the SOLID principles.
                 Moving on to the Azure , more things could've been utilized such as their email service or their azure maps api, the deployment of the entire system should been done once for the development in order to test new features with a test database , and one should be deployment for the production when all the features are working as intended.
                 Addressing the remaining requirements and exploring additional ones would enhance project usability and functionality. Further optimisation in design , implementation and deployment process could improve performance and also security.
                 `,
      },
    ],
  },
  {
    id: "2",
    title: "CS 1.6 VR - VR School Project",
    skills: [".NET C#", "Unity"],
    technologies: ["Intelij", "Unity", "Git", "GitHub"],
    desc: " CS 1.6 in VR with Dust2, an AK-47, and core movement. Features original sounds, full map access, and a detachable magazine.",
    image: VRCS,
    icons: [UnityIcon, NetIcon, GitHubIcon],
    github: "https://github.com/XRD-Group-11/VR-CS-1.6",
    details: [
      {
        title: "Idea",
        content: `We came up with the idea of converting CS 1.6 into a VR game. With that said, CS 1.6 is not such a easy game that we could easily recreate in VR under the time constraints, so we will be doing a demo version that is:
        - Offline.
        - 1 Map Only (Dust2);
        - 1 Gun Only (AK-47);
        - Movement Mechanics (Jumping, Shift and Crouching)
        - Basically gathering the assets from internet , for different sounds for example : walking , making an kill streak , gun sounds and found a map to play on. 
        `,
      },

      {
        title: "Assets",
        content: `We have decided to use the original textures, sounds and models from the original game. This task might sound easy since we can just go to game files and copy the assets, but the original game uses specific file extensions. In the end we have found the de_dust2 map on the internet in .obj format with all of the textures. The sounds we have pulled from the original game files and the gun model we have converted from .mdl to .fbx using a blender plugin.`,
      },
      {
        title: "Implementation",
        content: `When it comes to implementation, for now. The Dust2 map is integrated along with AK-47, it is possible to move around the map and that is about it. Also, we have modeled the AK-47 to have a detachable magazine inside the blender.`,
      },
      {
        title: "Requirements",
        content: `- move around de_dust2 \n\n-Shooting mechanic \n\n- -Holding a gun in the hand \n\n- -Fire a bullet \n\n- -Reload \n\n- -Recoil \n\n- -Charging handle \n\n-Throwing a HE grenade \n\n-Sound effects \n\n-extra features \n\n- -Particle effects \n\n- -Physical objects that respond to grenade explosions and being shot \n\n- -AI bots \n\n- -Health \n\n- -Damage \n\n- -Ammo \n\n
        `,
      },
      {
        title: "Video",
        content: "https://www.youtube.com/watch?v=uEUrcwIZw-Q",
      },
    ],
  },
  {
    id: "3",
    title: "Smart Gym - IOT School Project",
    desc: " Smart gym system that monitors air quality and adjusts temperature. Enhances workouts using CO2, humidity, and temperature sensors.",
    image: SmartGym,
    icons: [JavaIcon, AwsIcon, GitHubIcon, AndroidIcon, DbIcon],
    github: "https://github.com/IanaPostolachi/SEP4-v2",
  },
];
