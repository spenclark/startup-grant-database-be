
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("grants")
    .then(function () {
      // Inserts seed entries
      return knex('grants').insert([
        {
          competition_name: 'J.M.K. Innovation Prize',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'J.M. Kaplan Fund',
          website: 'http://www.jmkfund.org/',
          most_recent_application_due_date: "4/28/2017",
          amount: 175000,
          amount_notes: '$175,000 (for each of the 10 winners)',
          geographic_region: 'United States',
          domain_areas: 'Cultural heritage, human rights, the built environment, the natural environment',
          target_entrepreneur_demographic: null,
          notes: '--',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Lipman Family Prize',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'University of Pennsylvania',
          website: 'https://lipmanfamilyprize.wharton.upenn.edu/',
          most_recent_application_due_date: "8/14/2017",
          amount: 250000,
          amount_notes: '$250,000 for winning organization and $25,000 for each of other two finalists',
          geographic_region: 'Global',
          domain_areas: 'Education',
          target_entrepreneur_demographic: null,
          notes: 'Median organizational budget of $1.5M and median organizational age of 10 years',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'March Open Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'GlobalGiving',
          website: 'https://www.globalgiving.org/open-challenge-nomination/',
          most_recent_application_due_date: "1/31/2016",
          amount: 5000,
          amount_notes: 'At least $5,000',
          geographic_region: 'Global',
          domain_areas: 'N/A',
          target_entrepreneur_demographic: null,
          notes: 'Additional bonus prizes available for organizations that raise the most funds using GlobalGiving\'s platform. they accept applications at any time and your application is valid for 2 years',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Milken-Penn GSE Education Business Plan Competition',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'University of Pennsylvania School of Education',
          website: 'http://www.educationcompetition.org/',
          most_recent_application_due_date: "9/12/2017",
          amount: 25000,
          amount_notes: 'Venture Prize: $25,000\n Idea Prize: $15,000',
          geographic_region: 'Global',
          domain_areas: 'Urban education, technology',
          target_entrepreneur_demographic: null,
          notes: null,
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'MIT Clean Energy Prize',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Massachusetts Institute of Technology',
          website: 'http://cep.mit.edu/',
          most_recent_application_due_date: "2/17/2017",
          amount: 100000,
          amount_notes: '$100,000 Grand Prize, $75,000 DOE EERE Clean Energy Prize, and three $35,000 Track Prizes',
          geographic_region: 'Global',
          domain_areas: 'Energy efficiency, renewable energy, infrastructure & resources',
          target_entrepreneur_demographic: null,
          notes: 'At least two people; at least one team member must be a U.S. citizen',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Morgan Stanley Sustainable Investing Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Northwestern University, Kellogg School of Management',
          website: 'http://sustainableinvestingchallenge.org/',
          most_recent_application_due_date: "2/15/2017",
          amount: 10000,
          amount_notes: '1st place: $10,000\n Runner-up: $5,000',
          geographic_region: 'Global',
          domain_areas: 'Finance, investment; environmental or societal challenges',
          target_entrepreneur_demographic: null,
          notes: 'For graduate students only; maximum 4 people on a team',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'NextChallenge: Smart Cities',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'NextEnergy Center',
          website: 'http://www.nextenergy.org/nextchallenge/',
          most_recent_application_due_date: "8/18/2017",
          amount: 80000,
          amount_notes: null,
          geographic_region: 'Global',
          domain_areas: 'Innovation, energy savings, economic development',
          target_entrepreneur_demographic: null,
          notes: 'Up to $40,000 for non-Michigan-based applicants',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Notre Dame Global Adaptation Index Prize',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'University of Notre Dame Environmental Change Initiative',
          website: 'http://gain.org/nd-gain-prize',
          most_recent_application_due_date: null,
          amount: null,
          amount_notes: null,
          geographic_region: 'Global',
          domain_areas: 'Climate change in developing countries',
          target_entrepreneur_demographic: null,
          notes: null,
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Powerful Answers Award',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Verizon',
          website: 'http://www.verizon.com/about/portal/powerful-answers/',
          most_recent_application_due_date: "6/18/2015",
          amount: 1000000,
          amount_notes: '1 per category:\n 1st place: $1M\n 2nd place: $500K\n 3rd place: $250K',
          geographic_region: 'Global',
          domain_areas: 'Transportation: smarter driving, public transport & sharing, distribution & logistics\n Emergency Response: first responders, search & rescue, long-term relief\n Internet of Things: connected health, smart cities, smart agriculture',
          target_entrepreneur_demographic: null,
          notes: null,
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Rice University Business Plan Competition',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Rice University Alliance for Technology and Entrepreneurship',
          website: 'http://alliance.rice.edu/rbpc.aspx',
          most_recent_application_due_date: "2/10/2017",
          amount: 1500000,
          amount_notes: '$1.5 million in prizes',
          geographic_region: 'Global',
          domain_areas: 'Unspecified',
          target_entrepreneur_demographic: null,
          notes: 'For university students',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Social Innovation Award',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Teach for America',
          website: 'http://www.onedayallkids.org/awards-fellowships/social-innovation-award',
          most_recent_application_due_date: "1/9/2017",
          amount: 100000,
          amount_notes: null,
          geographic_region: 'United States',
          domain_areas: 'Low-income communities, educational inequity',
          target_entrepreneur_demographic: null,
          notes: 'Must be a Teach for America alum or corps member',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Social Venture Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'The Resolution Project',
          website: 'http://www.resolutionproject.org/about-social-venture-challenges',
          most_recent_application_due_date: null,
          amount: 3000,
          amount_notes: 'Up to $3,000',
          geographic_region: 'Global',
          domain_areas: 'Impactful, socially responsible projects addressing pressing social issues around the world',
          target_entrepreneur_demographic: null,
          notes: 'Winners are awarded the Resolution Fellowship, which includes ongoing mentorship, pro bono services, robust support, and access to the Resolution network. Check for various deadlines here: http://www.resolutionproject.org/svc/upcoming',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
        {
          competition_name: 'Southern California Social Entrepreneurship Challenge',
          type: 'Competition',
          area_focus: 'Social Entrepreneurship',
          sponsoring_entity: 'Academies for Social Entrepreneurship',
          website: 'http://www.socentchallenge.org/',
          most_recent_application_due_date: "7/31/2017",
          amount: 100000,
          amount_notes: '$100,000 in combined cash, extensive coaching, and investment advisory services',
          geographic_region: 'Global',
          domain_areas: 'Social enterprise',
          target_entrepreneur_demographic: null,
          notes: 'Challenge will focus on linking promising social enterprises with venture philanthropists in Southern California',
          early_stage_funding: true,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: '8/23/2017'
        },
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
          domain_areas: 'Unspecified',
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
          domain_areas: 'Solar',
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
          domain_areas: 'Companies whose social, environmental, and/or cultural mission strengthens your financial margins',
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
          domain_areas: 'Environment, education, young innovator, health, economic development',
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
          domain_areas: 'Energy',
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
          domain_areas: 'College access for low-income and underrepresented students',
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
          domain_areas: 'Novel advancements over existing solutions to a community problem',
          target_entrepreneur_demographic: null,
          notes: 'Must be a resident of California at time of application and 28 years or younger by 12/31/2015',
          early_stage_funding: false,
          is_reviewed: true,
          has_requests: false,
          details_last_updated: "8/23/2017"
        }
       
      ]);
    });
};
