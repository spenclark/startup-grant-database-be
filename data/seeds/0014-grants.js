const modifiedUrl = require('../helpers/modifyUrl');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('grants').then(function() {
    // Inserts seed entries
    return knex('grants').insert([
      {
        competition_name: 'Global Social Venture Competition',
        type: 'Competition',
        area_focus: 'Social',
        sponsoring_entity: 'Berkeley Haas',
        website: 'http://gsvc.org/apply/',
        most_recent_application_due_date: null,
        amount: 80000,
        amount_notes: null,
        geographic_region: 'North America',
        // domain_areas: 'Financially sustainable or profitable, scalable long term, social and/or environmental bottom line,',
        target_entrepreneur_demographic: null,
        notes:
          'Empower the next generation of social entrepreneurs by providing them with mentoring, exposure, and prize money to transform their ideas into fundable, scalable ventures that address the world’s most pressing challenges.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://gsvc.org/apply/'
        )}?size=75`,
      },
      {
        competition_name: 'Pacific Venture Capital Conference and Competition',
        type: 'Competition',
        area_focus: 'Business',
        sponsoring_entity: 'The Pacific Venture Capital',
        website: 'http://www.ubcpvcc.com/competition/',
        most_recent_application_due_date: null,
        amount: null,
        amount_notes: null,
        geographic_region: 'North America',
        // domain_areas: 'Pacific Venture Capital Conference and Competition (PVCC) is an international competition and conference designed for two types of students: ones with entrepreneurial ideas, and ones with a passion for start-up valuations.',
        target_entrepreneur_demographic: null,
        notes:
          'The competition is a stage for undergraduate and MBA students to present business ideas and financial valuations to an audience of entrepreneurial leaders, senior venture capitalists, and top industry professionals from across North America.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.ubcpvcc.com/competition/'
        )}?size=75`,
      },
      {
        competition_name: 'Millennial Impact Fellow Video Competition',
        type: 'Competition',
        area_focus: 'Business',
        sponsoring_entity: 'NewProfit',
        website:
          'http://www.newprofit.org/gathering-leaders-millennial-impact-fellow-video-competition/?utm_source=New+Profit+MASTER+List+%28updated+1.23.17%29&utm_campaign=da3dc04d0d-EMAIL_CAMPAIGN_2017_01_24&utm_medium=email&utm_term=0_dee2859061-da3dc04d0d-430297581',
        most_recent_application_due_date: null,
        amount: null,
        amount_notes: null,
        geographic_region: 'North America',
        // domain_areas: 'Participate in one of the most dynamic social impact-focused events of the year, where you’ll get to meet and collaborate with legendary social justice leaders, social entrepreneurs, and other changemakers.',
        target_entrepreneur_demographic: null,
        notes:
          'How can we break down the barriers between us – generational, racial, socioeconomic, geographic – to create an America that works for everyone? At New Profit’s annual Gathering of Leaders 400 leadership-level participants will delve into this question together.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.newprofit.org/gathering-leaders-millennial-impact-fellow-video-competition/?utm_source=New+Profit+MASTER+List+%28updated+1.23.17%29&utm_campaign=da3dc04d0d-EMAIL_CAMPAIGN_2017_01_24&utm_medium=email&utm_term=0_dee2859061-da3dc04d0d-430297581'
        )}?size=75`,
      },
      {
        competition_name: 'Citi Tech for Integrity Challenge',
        type: 'Competition',
        area_focus: 'Business',
        sponsoring_entity: 'Citi',
        website: 'http://www.techforintegritychallenge.com/',
        most_recent_application_due_date: null,
        amount: null,
        amount_notes: null,
        geographic_region: 'North America',
        // domain_areas: 'The Citi Tech for Integrity Challenge (T4I) is an open innovation challenge to source solutions that promote integrity, accountability and transparency in the public sector. Solve for real-life problem statements that are relevant to government organizations globally.',
        target_entrepreneur_demographic: null,
        notes:
          'The accelerator program will run from March to April, when finalists will be selected to participate in Demo Days with cash prizes.',
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.techforintegritychallenge.com/'
        )}?size=75`,
      },
      {
        competition_name:
          'Global Competition for Hardware-Led Social Innovations',
        type: 'Competition',
        area_focus: 'Business',
        sponsoring_entity: 'ISHOW',
        website: 'http://cep.mit.edu/',
        most_recent_application_due_date: null,
        amount: 50000,
        amount_notes: null,
        geographic_region: 'Global',
        // domain_areas: 'Seeking sustainable and scalable hardware-based solutions and technologies that can have a transformational economic, environmental and social impact in underserved communities around the world. The global competition invites the best and brightest engineers, entrepreneurs, students, and innovators to enter their prototype solutions that focus on energy, health, agriculture, clean water, and sanitation.',
        target_entrepreneur_demographic: null,
        notes:
          'Designers are invited to enter one of three ISHOW competitions in Bangalore, India; Nairobi, Kenya, and Washington, D.C - 3 winners at each ISHOW can win up to $50,000.',
        early_stage_funding: true,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://cep.mit.edu/'
        )}?size=75`,
      },
      {
        competition_name: 'Natural Launchpad',
        type: 'Competition',
        area_focus: 'Business',
        sponsoring_entity: 'Burts Bees',
        website:
          'http://www.burtsbees.com/content/inaugural-natural-launchpad-winners/natural-launchpad-inaugural.html',
        most_recent_application_due_date: null,
        amount: 10000,
        amount_notes: null,
        geographic_region: 'Global',
        // domain_areas: 'At Burt\'s Bees, we take our cue from nature. We\'ve committed ourselves to making the world a little greener, a little cleaner, by doing what bees do best: working hard on natural products that people love. That\'s why, for example, we\'ve committed ourselves to a policy of sending zero waste to landfill and also serious about energy use.',
        target_entrepreneur_demographic: null,
        notes:
          "A day of coaching at Burt's Bees HQ in Durham, NC, Access to a community of peers, and The Natural Launchpad seal to place on all marketing materials and product packaging",
        early_stage_funding: false,
        is_reviewed: true,
        has_requests: false,
        details_last_updated: '8/23/2017',
        logo: `https://logo.clearbit.com/${modifiedUrl(
          'http://www.burtsbees.com/content/inaugural-natural-launchpad-winners/natural-launchpad-inaugural.html'
        )}?size=75`,
      },
    ]);
  });
};
