import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-port-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './port-about.component.html',
  styleUrl: './port-about.component.css'
})
export class PortAboutComponent {

  faqs = [
    {
      question: 'Tell me about yourself?',
      answer:
        'I am a Front-End Developer with 3.5+ years of experience in Angular and UI/Web development. I specialize in building scalable and responsive applications, optimizing performance, and ensuring seamless user experiences. At Prodapt Solutions, I have worked on automation platforms, authentication systems, and real-time dashboards, contributing to efficiency improvements and enhanced usability.',
      isOpen: false,
    },
    {
      question: 'What are your key strengths as a developer?',
      answer:
        'Specialized in Angular, TypeScript, JavaScript, HTML, CSS, and frameworks like React and Vue.js. Also have experience with Keycloak, Elasticsearch, and cloud-based authentication systems.',
      isOpen: false,
    },
    {
      question: 'What kind of projects worked on?',
      answer:
        'Contributed to projects involving automation platform Netbots development with Angular and React which reduce the repetive work through automation, workflow management, and API portals, focusing on improving efficiency, user experience, and system scalability.',
      isOpen: false,
    },
    {
      question: 'How I keep myself updated with new technologies?',
      answer:
        'I regularly explore industry trends, read blogs, contribute to open-source projects, and solve coding problems on platforms like LeetCode and HackerRank. I also attend tech meetups and workshops to stay updated.',
      isOpen: false,
    },
    {
      question: 'Can you describe a challenging project you worked on?',
      answer:
        'One of the most challenging projects I worked on was the Netbots Automation Platform, designed for automating network operations using bots. A key challenge was implementing a scalable authentication and authorization system while ensuring performance optimization. To achieve this, I integrated Keycloak for authentication and implemented Role-Based Access Control (RBAC) to manage user permissions effectively. \n\n' +
        'To enhance performance, I utilized lazy loading in Angular, reducing initial load times and improving responsiveness. I also structured the project following the Ease Standard Model (ESAE) for better scalability and maintainability. Additionally, I developed Elasticsearch Kibana dashboards to visualize real-time bot activities, automation efficiency, and system analytics, allowing users to gain actionable insights. \n\n' +
        'Integrating Kibana with the platform provided a seamless experience for monitoring automation logs and performance metrics. These optimizations led to a 35% improvement in user engagement and a 30% reduction in response time, ensuring a smooth and scalable user experience.',
      isOpen: false,
    }
    
  ];

  toggleFaq(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.isOpen = i === index ? !faq.isOpen : false; 
    });
  }
}
