
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("grants")
    .then(function () {
      // Inserts seed entries
      return knex('grants').insert([
        {
          competition_name: 'Start-Up Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Duke University',
          website: 'http://www.dukestartupchallenge.org/',
          most_recent_application_due_date: "10/30/2016",
          amount: 50000,
          amount_notes: '1st place: $50,000\n Open competition prizes: $10,000\n Top 15 student teams: $500 each\n AARP Foundation Prize: $5,000',
          geographic_region: 'Global',
          // domain_areas: 'Unspecified',
          target_entrepreneur_demographic: null,
          notes: 'For Duke students/alumni only',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Sunshot Catalyst Program',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'U.S. Department of Energy',
          website: 'http://energy.gov/eere/sunshot/sunshot-catalyst-program',
          most_recent_application_due_date: null,
          amount: null,
          amount_notes: 'Prizes vary',
          geographic_region: 'United States',
          // domain_areas: 'Solar',
          target_entrepreneur_demographic: null,
          notes: 'Catalyst program consists of ideation, business innovation, prototype, and incubation; also holds jamathons',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Sustainable Business Plan Collaboration',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Mentor Capital Network',
          website: 'http://mentorcapitalnet.org/home/program/',
          most_recent_application_due_date: "10/16/2017",
          amount: 50000,
          amount_notes: 'Up to $50,000 worth of cash and professional services will be divided among the finalists each year',
          geographic_region: 'Global',
          // domain_areas: 'Companies whose social, environmental, and/or cultural mission strengthens your financial margins',
          target_entrepreneur_demographic: null,
          notes: null,
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Tech Award for Global Good',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Tech Museum of Innovation',
          website: 'https://www.thetech.org/tech-global-good',
          most_recent_application_due_date: null,
          amount: 75000,
          amount_notes: '$25,000-$75,000',
          geographic_region: 'Global',
          // domain_areas: 'Environment, education, young innovator, health, economic development',
          target_entrepreneur_demographic: null,
          notes: 'Email lzane@thetech.org for applications; ltsai@thetech.org for more info.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'UCLA Anderson Challenges in Energy Case Competition',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'UCLA Anderson School of Management',
          website: 'http://andersonemg.weebly.com/case-competition.html',
          most_recent_application_due_date: "1/29/2017",
          amount: 5000,
          amount_notes: null,
          geographic_region: 'Global',
          // domain_areas: 'Energy',
          target_entrepreneur_demographic: null,
          notes: 'Must travel to UCLA',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Venture Philanthropy Grant',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Margoes Foundation',
          website: 'http://www.pfs-llc.net/foundations/margoes-foundation/grantseekers/venture-philanthropy',
          most_recent_application_due_date: null,
          amount: 50000,
          amount_notes: '$50,000 per year (for 3 years)',
          geographic_region: 'San Francisco Bay Area',
          // domain_areas: 'College access for low-income and underrepresented students',
          target_entrepreneur_demographic: null,
          notes: 'For more information, contact Hector Melendez at hmelendez@pfs-llc.net, 415-561-6540, ext. 206, or Amy Freeman at afreeman@pfs-llc.net, 415-561-6540, ext. 224. Deadline not yet released. Opens in early 2018',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Westly Prize',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Westly Foundation',
          website: 'http://westly.org/westly-prize/',
          most_recent_application_due_date: "10/15/2017",
          amount: 20000,
          amount_notes: null,
          geographic_region: 'California',
          // domain_areas: 'Novel advancements over existing solutions to a community problem',
          target_entrepreneur_demographic: null,
          notes: 'Must be a resident of California at time of application and 28 years or younger by 12/31/2015',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Wireless Innovation Project',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Vodafone Americas Foundation',
          website: 'http://vodafone-us.com/wireless-innovation-project/',
          most_recent_application_due_date: "11/1/2017",
          amount: 300000,
          amount_notes: '1st place: $300,000\n 2nd place: $200,000\n 3rd place: $100,000',
          geographic_region: 'Global',
          // domain_areas: 'Technology, social impact. Social areas include access to communication, education, economic development, environment, health. Technical issues include connectivity, energy, language/literacy, ease of use.',
          target_entrepreneur_demographic: null,
          notes: null,
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Government of Chile - Ministry of Energy',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Impacta Energy',
          website: 'https://www.impactaenergia.cl/en',
          most_recent_application_due_date: "7/12/2017",
          amount: 107000,
          amount_notes: '$7,000-$107,000',
          geographic_region: 'Chile',
          // domain_areas: 'Improve renewable energy and meet hosehold demands efficently',
          target_entrepreneur_demographic: null,
          notes: 'Challenge that will seek ideas on addressing access, saving and promotion of energy as a source of development in Chile. New deadline not yet announced; last deadline was July 12, 2017',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Project Entrepreneur',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'UBS and Rent the Runway',
          website: 'http://projectentrepreneur.org/',
          most_recent_application_due_date: "11/21/2016",
          amount: 10000,
          amount_notes: null,
          geographic_region: 'United States',
          // domain_areas: 'Have an existing prototype or beta technology and plan to build high-growth companies',
          target_entrepreneur_demographic: null,
          notes: 'Providing women access to the tools, training and networks needed to build scalable, economically impactful companies. Next deadline in fall 2017; previous deadline was 11/21/2016',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Kellogg-Morgan Stanley Sustainable Investing Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'MacAthur Foundation, Generation Foundation, Equilibrium Capital, Finance in Motion, Milken Institute',
          website: 'http://sustainableinvestingchallenge.org/compete/',
          most_recent_application_due_date: "2/15/2017",
          amount: null,
          amount_notes: null,
          geographic_region: 'United States',
          // domain_areas: 'Have an idea that has a sustainable impact through an investment strategy that uses finance and investment tools to create an innovative solution to an environmental or societal challenge',
          target_entrepreneur_demographic: null,
          notes: 'Develop creative financial approaches to tackle our world’s most pressing challenges',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Global Social Venture Competition',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Berkeley Haas',
          website: 'http://gsvc.org/apply/',
          most_recent_application_due_date: "12/4/2017",
          amount: 80000,
          amount_notes: null,
          geographic_region: 'United States',
          // domain_areas: 'Financially sustainable or profitable, scalable long term, social and/or environmental bottom line,',
          target_entrepreneur_demographic: null,
          notes: 'Empower the next generation of social entrepreneurs by providing them with mentoring, exposure, and prize money to transform their ideas into fundable, scalable ventures that address the world’s most pressing challenges.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'EMA Innovator Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'EMA',
          website: 'http://www.makeanimpact2017.com/',
          most_recent_application_due_date: "2/15/2017",
          amount: 100000,
          amount_notes: null,
          geographic_region: 'Beverly Hills',
          // domain_areas: 'EMA serves as a valuable link between the world of media and the environmental community, working tirelessly to bring the planet\'s most pressing issues to the forefront of pop culture and make true change by inspiring the next generation of filmmakers and entrepreneurs.',
          target_entrepreneur_demographic: null,
          notes: 'Each contestant must submit their business plan, as well as a short video pitch of their concept/company.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Pacific Venture Capital Conference and Competition',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'The Pacific Venture Capital',
          website: 'http://www.ubcpvcc.com/competition/',
          most_recent_application_due_date: "1/24/2017",
          amount: null,
          amount_notes: null,
          geographic_region: 'United States',
          // domain_areas: 'Pacific Venture Capital Conference and Competition (PVCC) is an international competition and conference designed for two types of students: ones with entrepreneurial ideas, and ones with a passion for start-up valuations.',
          target_entrepreneur_demographic: null,
          notes: 'The competition is a stage for undergraduate and MBA students to present business ideas and financial valuations to an audience of entrepreneurial leaders, senior venture capitalists, and top industry professionals from across North America.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Millennial Impact Fellow Video Competition',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'NewProfit',
          website: 'http://www.newprofit.org/gathering-leaders-millennial-impact-fellow-video-competition/?utm_source=New+Profit+MASTER+List+%28updated+1.23.17%29&utm_campaign=da3dc04d0d-EMAIL_CAMPAIGN_2017_01_24&utm_medium=email&utm_term=0_dee2859061-da3dc04d0d-430297581',
          most_recent_application_due_date: "3/2/2017",
          amount: null,
          amount_notes: null,
          geographic_region: 'Atlanta',
          // domain_areas: 'Participate in one of the most dynamic social impact-focused events of the year, where you’ll get to meet and collaborate with legendary social justice leaders, social entrepreneurs, and other changemakers.',
          target_entrepreneur_demographic: null,
          notes: 'How can we break down the barriers between us – generational, racial, socioeconomic, geographic – to create an America that works for everyone? At New Profit’s annual Gathering of Leaders 400 leadership-level participants will delve into this question together.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Bay Area Global Health Innovation Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Funded by HealthRoots Foundation for Global Health, in partnership with the UC Berkeley Center for Global Public Health and the Stanford Center for Innovation in Global Health.',
          website: 'http://www.bayareaglobalhealthchallenge.com/',
          most_recent_application_due_date: "2/28/2017",
          amount: 10000,
          amount_notes: '$10,000 in seed funding, and will have the opportunity to engage a high-level cohort of judges and speakers.',
          geographic_region: 'Bay Area',
          // domain_areas: 'We offer student teams from universities worldwide the opportunity to present their ideas for low-cost, high-impact, and scalable global health innovations.',
          target_entrepreneur_demographic: null,
          notes: 'An annual competition hosted by the University of California, Berkeley, Stanford University, and the HealthRoots Foundation for Global Health, it offers student teams from universities worldwide the opportunity to present ideas for low-cost, high-impact, scalable global health innovations.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Clinton Global Initiative University 2017',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Clinton Global Initiative University',
          website: 'https://www.clintonfoundation.org/clinton-global-initiative/meetings/cgi-university/apply/before-you-apply',
          most_recent_application_due_date: "3/1/2017",
          amount: null,
          amount_notes: null,
          geographic_region: 'United States',
          // domain_areas: 'CGI U challenges young leaders and entrepreneurs to become agents of positive social change by developing a Commitment to Action: a new, specific, and measurable plan to address a challenge in one of CGI U’s five focus areas.',
          target_entrepreneur_demographic: null,
          notes: null,
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Citi Tech for Integrity Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Citi',
          website: 'http://www.techforintegritychallenge.com/',
          most_recent_application_due_date: "3/6/2017",
          amount: null,
          amount_notes: null,
          geographic_region: 'United States',
          // domain_areas: 'The Citi Tech for Integrity Challenge (T4I) is an open innovation challenge to source solutions that promote integrity, accountability and transparency in the public sector. Solve for real-life problem statements that are relevant to government organizations globally.',
          target_entrepreneur_demographic: null,
          notes: 'The accelerator program will run from March to April, when finalists will be selected to participate in Demo Days with cash prizes.',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Global Competition for Hardware-Led Social Innovations',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'ISHOW',
          website: 'http://cep.mit.edu/',
          most_recent_application_due_date: "3/15/2017",
          amount: 50000,
          amount_notes: null,
          geographic_region: 'Global',
          // domain_areas: 'Seeking sustainable and scalable hardware-based solutions and technologies that can have a transformational economic, environmental and social impact in underserved communities around the world. The global competition invites the best and brightest engineers, entrepreneurs, students, and innovators to enter their prototype solutions that focus on energy, health, agriculture, clean water, and sanitation.',
          target_entrepreneur_demographic: null,
          notes: 'Designers are invited to enter one of three ISHOW competitions in Bangalore, India; Nairobi, Kenya, and Washington, D.C - 3 winners at each ISHOW can win up to $50,000.',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        },
        {
          competition_name: 'Natural Launchpad',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Burts Bees',
          website: 'http://www.burtsbees.com/content/inaugural-natural-launchpad-winners/natural-launchpad-inaugural.html',
          most_recent_application_due_date: null,
          amount: 10000,
          amount_notes: null,
          geographic_region: 'Unspecified',
          // domain_areas: 'At Burt\'s Bees, we take our cue from nature. We\'ve committed ourselves to making the world a little greener, a little cleaner, by doing what bees do best: working hard on natural products that people love. That\'s why, for example, we\'ve committed ourselves to a policy of sending zero waste to landfill and also serious about energy use.',
          target_entrepreneur_demographic: null,
          notes: 'A day of coaching at Burt\'s Bees HQ in Durham, NC, Access to a community of peers, and The Natural Launchpad seal to place on all marketing materials and product packaging',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        }
    
      ]);
    });
};
