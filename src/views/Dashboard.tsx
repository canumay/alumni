import React, { useState } from 'react'
import '../styles/main.css'
import '../styles/pages/dashboard.css'
import logo from '../images/logo.png';
import clubLogo1 from '../images/uni-club-1.png'
import clubLogo2 from '../images/uni-club-2.png'
import clubLogo3 from '../images/uni-club-3.png'
import postPhoto from '../images/post-photo.png'
import jobAnnouncementPhoto from '../images/create-job-announcement.png'
import eventPhoto from '../images/create-event.png'
import donationPhoto from '../images/make-donation.png'
import { ReactComponent as SearchIcon } from '../svgs/search.svg';
import { ReactComponent as ActivityIcon } from '../svgs/activity.svg';
import { ReactComponent as NetworkIcon } from '../svgs/network.svg';
import { ReactComponent as JobsIcon } from '../svgs/jobs.svg';
import { ReactComponent as MessagingIcon } from '../svgs/messaging.svg';
import { ReactComponent as EventsIcon } from '../svgs/events.svg';
import { ReactComponent as DonationsIcon } from '../svgs/donations.svg';
import { ReactComponent as NotificationsIcon } from '../svgs/notifications.svg';
import { ReactComponent as GraduateIcon } from '../svgs/graduate.svg';
import { ReactComponent as PhotoIcon } from '../svgs/photo.svg';
import { ReactComponent as VideoIcon } from '../svgs/video.svg';
import { ReactComponent as SendIcon } from '../svgs/send.svg';
import { ReactComponent as WorldIcon } from '../svgs/world.svg';
import { ReactComponent as LikeIcon } from '../svgs/like.svg';
import { ReactComponent as CommentsIcon } from '../svgs/comments.svg';
import { ReactComponent as ShareIcon } from '../svgs/share.svg';
import { ReactComponent as CloseIcon } from '../svgs/close.svg';
import Select from 'react-select';

function Dashboard() {
  const [upcomingEvents] = useState([
    { logo: clubLogo1, eventTitle: "Talkversity (Session 3)", date: "11.04.2021 19:00", attendees: [1, 2, 3] },
    { logo: clubLogo2, eventTitle: "Example Event", date: "11.04.2021 21:00", attendees: [4, 5, 6] },
    { logo: clubLogo3, eventTitle: "Example Event", date: "13.04.2021 12:00", attendees: [7, 8, 9] },
    { logo: clubLogo1, eventTitle: "Talkversity (Session 4)", date: "16.04.2021 21:00", attendees: [10, 11, 12] },
  ])

  const [people] = useState([
    { avatar: 2, fullName: "Cevdet Yeşiltepe", jobTitle: "Founder of Yesiltepe Software" },
    { avatar: 5, fullName: "Berk Kudret", jobTitle: "Frontend Developer at ExComp" },
    { avatar: 3, fullName: "Elif Korkmaz", jobTitle: "Industrial Engineer at Arcelik" },
    { avatar: 17, fullName: "Mehmet Kurşun", jobTitle: "Computer Engineer at Aselsan" },
  ])

  const [posts, setPosts] = useState([
    {
      userId: 35,
      fullName: "Mehmet Esmeroğlu",
      jobTitle: "CEO at ExComp",
      publishedAt: new Date(),
      photo: null,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptate similique quisquam asperiores quasi ducimus, quas numquam ad nostrum veniam, eaque voluptas eum alias optio quae reprehenderit nemo modi vero minus atque neque enim ea? Ipsum recusandae, voluptates architecto fuga eligendi numquam dicta alias enim saepe iusto reiciendis ad sequi quaerat, illum natus, eos nobis? Ullam quae beatae provident, consequuntur quidem voluptates! Fuga harum illum asperiores commodi excepturi voluptatibus facere corporis, ut officia quibusdam nemo. Possimus dolores mollitia minima non quia ad cum incidunt placeat quos impedit harum, sit tenetur officia expedita voluptates rerum quas unde quod quo excepturi omnis.",
      social: {
        likes: 37,
        comments: 13,
        shares: 8
      },
    },
    {
      userId: 30,
      fullName: "Ayşe Yeter",
      jobTitle: "Assistant Professor at Bilkent University",
      publishedAt: new Date(),
      photo: postPhoto,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis ut sit facilisi dui erat adipiscing sagittis. Enim, viverra morbi massa congue pellentesque nibh ultricies pulvinar suspendisse. In ipsum convallis fusce volutpat integer sodales duis sit. Quis sit diam a, tempus et dapibus fringilla tristique platea. Rhoncus euismod eget parturient quis dictum aliquam. Pellentesque neque, nulla tristique a vel. Tortor purus proin non, ac vitae sed vel morbi. Metus, neque ipsum arcu eget. Consectetur adipiscing urna egestas fames aliquam.",
      social: {
        likes: 118,
        comments: 36,
        shares: 17
      }
    },
    {
      userId: 204,
      fullName: "Ayşe Yılmaz",
      jobTitle: "Computer Engineering Student",
      publishedAt: new Date(),
      photo: null,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, totam modi optio atque, iusto voluptatum incidunt laborum recusandae similique, tempore eaque libero nobis quis facilis veniam delectus in porro nostrum.",
      social: {
        likes: 5,
        comments: 1,
        shares: 0
      },
    },
    {
      userId: 208,
      fullName: "Esma Nergiz",
      jobTitle: "Software Developer at ExCompany",
      publishedAt: new Date(),
      photo: null,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis reprehenderit debitis repellendus provident, aliquam aliquid porro est dignissimos fuga facere accusantium animi, commodi, itaque minus sunt? Quia repellendus fugiat sed minus, maiores aliquid architecto esse neque repudiandae error nesciunt",
      social: {
        likes: 23,
        comments: 4,
        shares: 9
      },
    },
  ])

  const [postText, setPostText] = useState("");

  const [activeModal, setActiveModal] = useState("none")

  const [jobAnnouncementData, setJobAnnouncementData] = useState({
    title: "",
    company: "",
    contactEmail: "",
    endDate: "",
    description: "",
    location: "office",
    seniority: { selected: {}, options: [{ value: 'intern', label: "Intern" }, { value: "junior", label: "Junior" }, { value: "mid", label: "Mid" }, { value: "senior", label: "Senior" }] },
    tags: { selected: [], options: [{ value: 'html', label: "HTML" }, { value: "css", label: "CSS" }, { value: "js", label: "Javascript" }, { value: "frontend", label: "Frontend" }, { value: "backend", label: "Backend" }] },
    address: ""
  })

  const [eventData, setEventData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    type: "physical",
    whoCanAttend: "",
    participantLimit: { selected: {}, options: [{ value: '50-', label: "Less than 50 people" }, { value: "50-100", label: "Between 50-100 people" }, { value: "100+", label: "More than 100 people" }] },
    address: ""
  })

  const [donationData, setDonationData] = useState({
    title: "",
    type: "money",
    donatedBy: "",
    donatedTo: "",
    amount: 0,
    additionalInfo: "",
    paymentType: "creditCard"
  })

  const handleNewPost = () => {
    setPosts(posts => [{ userId: 87, fullName: "John Doe", jobTitle: "Product Manager at Example Company", photo: null, publishedAt: new Date(), social: { comments: 0, likes: 0, shares: 0 }, text: postText }, ...posts])
    setPostText("");
  }

  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setActiveModal("none");
  }

  return (
    <>
      <header className={activeModal !== "none" ? "low-opacity" : ""} onClick={e => activeModal !== 'none' && setActiveModal('none')}>
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        {/* Search */}
        <div className="search-container">
          <div className="search-container__input-group">
            <SearchIcon className="search-container__icon" />
            <input id="emailAddress" type="text" className="search-container__input" placeholder="Search..." />
          </div>
        </div>
        {/* Menus */}
        <div className="menu-container">
          <div className="menu-container__item">
            <ActivityIcon className="menu-container__icon" />
            <p className="menu-container__title active">Activity</p>
          </div>
          <div className="menu-container__item">
            <NetworkIcon className="menu-container__icon" />
            <p className="menu-container__title">Network</p>
          </div>
          <div className="menu-container__item">
            <JobsIcon className="menu-container__icon" />
            <p className="menu-container__title">Jobs</p>
          </div>
          <div className="menu-container__item">
            <MessagingIcon className="menu-container__icon" />
            <p className="menu-container__title">Messaging</p>
          </div>
          <div className="menu-container__item">
            <EventsIcon className="menu-container__icon" />
            <p className="menu-container__title">Events</p>
          </div>
          <div className="menu-container__item">
            <DonationsIcon className="menu-container__icon" />
            <p className="menu-container__title">Donations</p>
          </div>
        </div>
        {/* Profile */}
        <div className="profile-container">
          <NotificationsIcon className="profile-container__icon" />
          <div className="profile-container__group">
            <img src={`https://i.pravatar.cc/200?u=${87}`} alt="user" className="profile-container__profile-photo" />
            <div>
              <p className="profile-container__title">John Doe</p>
              <p className="profile-container__subtitle">john.doe@aybu.edu.tr</p>
            </div>
          </div>
        </div>
      </header>
      <main className={activeModal !== "none" ? "low-opacity" : ""} onClick={e => activeModal !== 'none' && setActiveModal('none')}>
        {/* Main */}
        <div className="main">
          {/* New Post */}
          <div className="new-post">
            <div className="new-post__body">
              <div className="new-post__body__left-side">
                <img src={`https://i.pravatar.cc/200?u=${87}`} alt="user" className="avatar" />
                <input type="text" placeholder="What's on your mind?" value={postText} onKeyPress={e => e.key === "Enter" && handleNewPost()} onChange={(e) => setPostText(e.target.value)} />
              </div>
              <div className="new-post__body__right-side">
                <button onClick={handleNewPost}><SendIcon /></button>
              </div>
            </div>
            <div className="new-post__footer">
              <button className="item">
                <PhotoIcon className="icon" />
                <p className="title">Photo</p>
              </button>
              <button className="item">
                <VideoIcon className="icon" />
                <p className="title">Video</p>
              </button>
              <button className="item" onClick={() => setActiveModal('job-announcement')}>
                <JobsIcon className="icon" />
                <p className="title">Job List</p>
              </button>
              <button className="item" onClick={() => setActiveModal('event')}>
                <EventsIcon className="icon" />
                <p className="title">Event</p>
              </button>
              <button className="item" onClick={() => setActiveModal('donation')}>
                <DonationsIcon className="icon" />
                <p className="title">Donation</p>
              </button>
            </div>
          </div>
          {/* Posts */}
          <div className="posts">
            {posts.map(post => {
              return (<div className="post">
                <div className="post__header">
                  <img src={`https://i.pravatar.cc/200?u=${post.userId}`} alt="user" className="post__avatar" />
                  <div>
                    <h3 className="post__fullName">{post.fullName}</h3>
                    <h4 className="post__jobTitle">{post.jobTitle}</h4>
                    <div className="post__publishedAt">
                      <WorldIcon />
                      <p>{post.publishedAt.toLocaleTimeString()}</p>
                    </div>
                  </div>
                </div>
                <div className="post__body">
                  <p>{post.text}</p>
                  {post.photo && <img className="post__image" src={post.photo} alt="post related" />}
                </div>
                <div className="post__footer">
                  <div className="interactions">
                    <div className="interaction">
                      <LikeIcon />
                      <p>{post.social.likes}</p>
                    </div>
                    <div className="interaction">
                      <CommentsIcon />
                      <p>{post.social.comments}</p>
                    </div>
                    <div className="interaction">
                      <ShareIcon />
                      <p>{post.social.shares}</p>
                    </div>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-card__top-content"></div>
            <div className="profile-card__bottom-content">
              <div className="profile-card__container">
                <img src={`https://i.pravatar.cc/200?u=${87}`} alt="user" className="profile-card__avatar" />
                <h2 className="profile-card__name">John Doe</h2>
                <p className="profile-card__job">Product Manager at Example Company</p>
                <span className="profile-card__graduate-badge">
                  <GraduateIcon />
                  <span>2014</span>
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="upcoming-events-card">
            <div className="upcoming-events-card__top-content">
              <EventsIcon className="icon" />
              <h4 className="title">Upcoming Events</h4>
            </div>
            <div className="upcoming-events-card__body">
              <ul className="events">
                {upcomingEvents.map(event => {
                  return (
                    <li className="events__item">
                      <div className="events__item__left-side">
                        <img src={event.logo} alt="logo" className="events__item__logo" />
                        <div>
                          <p className="events__item__title">{event.eventTitle}</p>
                          <p className="events__item__subtitle">{event.date}</p>
                        </div>
                      </div>
                      <div className="events__item__right-side">
                        <div className="events__item__attendees">
                          {event.attendees.map(idx => <img src={`https://i.pravatar.cc/20?u=${idx}`} alt="user" className="attendee" />)}
                        </div>
                      </div>
                    </li>)
                })}
              </ul>
            </div>
          </div>

          {/* People You May Know */}
          <div className="people-card">
            <div className="people-card__top-content">
              <NetworkIcon className="icon" />
              <h4 className="title">People You May Know</h4>
            </div>
            <div className="people-card__body">
              <ul className="people">
                {people.map(person => {
                  return (
                    <li className="people__item">
                      <div className="people__item__left-side">
                        <img src={`https://i.pravatar.cc/200?u=${person.avatar}`} alt="person" className="people__item__avatar" />
                        <div>
                          <p className="people__item__fullName">{person.fullName}</p>
                          <p className="people__item__jobTitle">{person.jobTitle}</p>
                        </div>
                      </div>
                      <div className="people__item__right-side">
                        <button className="people__item__button">Follow</button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* Job Announcement Modal */}
      {activeModal === "job-announcement" && <div className="modal-wrapper">
        <div className="modal">
          <div className="modal__header">
            <h3>Create job announcement</h3>
            <button onClick={() => setActiveModal("none")}><CloseIcon /></button>
          </div>
          <img className="modal__photo" src={jobAnnouncementPhoto} alt="job announcement" />
          <div className="modal__body">
            <form action="#">
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input id="jobTitle" type="text" placeholder="Full Stack Web Dev" value={jobAnnouncementData.title} onChange={e => setJobAnnouncementData(state => ({ ...state, title: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Example Company" value={jobAnnouncementData.company} onChange={e => setJobAnnouncementData(state => ({ ...state, company: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="contact">Contact E-mail</label>
                  <input id="contact" type="email" placeholder="hr@examplecompany.com" value={jobAnnouncementData.contactEmail} onChange={e => setJobAnnouncementData(state => ({ ...state, contactEmail: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="endDate">End Date</label>
                  <input id="endDate" type="date" placeholder="28/04/2021 23:59" value={jobAnnouncementData.endDate} onChange={e => setJobAnnouncementData(state => ({ ...state, endDate: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="jobDescription">Job Description</label>
                  <textarea id="jobDescription" placeholder="Full Stack Web Dev" value={jobAnnouncementData.description} onChange={e => setJobAnnouncementData(state => ({ ...state, description: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="jobLocation">Job Location</label>
                  <div className="radio-group">
                    <div className="radio">
                      <input type="radio" name="jobLocation" value="office" checked={jobAnnouncementData.location === "office"} onChange={e => setJobAnnouncementData(state => ({ ...state, location: e.target.value }))} />
                      <label>Office</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="jobLocation" value="remote" checked={jobAnnouncementData.location === "remote"} onChange={e => setJobAnnouncementData(state => ({ ...state, location: e.target.value }))} />
                      <label>Remote</label>
                    </div>
                  </div>
                </div>
                <div className="input-group flex-2">
                  <label htmlFor="jobSeniority">Job Seniority</label>
                  <Select
                    name="jobSeniority"
                    options={jobAnnouncementData.seniority.options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                <div className="input-group flex-3">
                  <label htmlFor="tags">Tags</label>
                  <Select
                    isMulti
                    name="tags"
                    options={jobAnnouncementData.tags.options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="officeLocation">Office Location</label>
                  <input type="text" id="officeLocation" value={jobAnnouncementData.address} onChange={e => setJobAnnouncementData(state => ({ ...state, address: e.target.value }))} />
                </div>
              </div>
              <div className="button-group">
                <button className="btn btn--warning" onClick={e => handleButton(e)}>Discard</button>
                <button className="btn" onClick={e => handleButton(e)}>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>}
      {/* Event Modal */}
      {activeModal === "event" && <div className="modal-wrapper">
        <div className="modal">
          <div className="modal__header">
            <h3>Create event/meetings</h3>
            <button onClick={() => setActiveModal("none")}><CloseIcon /></button>
          </div>
          <img className="modal__photo" src={eventPhoto} alt="event" />
          <div className="modal__body">
            <form action="#">
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="eventTitle">Event Title</label>
                  <input id="eventTitle" type="text" placeholder="Example Event" value={eventData.title} onChange={e => setEventData(state => ({ ...state, title: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input id="startDate" type="date" placeholder="26/04/2021 12:00" value={eventData.startDate} onChange={e => setEventData(state => ({ ...state, startDate: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="endDate">End Date</label>
                  <input id="endDate" type="date" placeholder="28/04/2021 23:59" value={eventData.endDate} onChange={e => setEventData(state => ({ ...state, endDate: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="eventDescription">Description</label>
                  <textarea id="eventDescription" placeholder="Example description..." value={eventData.description} onChange={e => setEventData(state => ({ ...state, description: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="eventType">Event Type</label>
                  <div className="radio-group">
                    <div className="radio">
                      <input type="radio" name="eventType" value="physical" checked={eventData.type === 'physical'} onChange={e => setEventData(state => ({ ...state, type: e.target.value }))} />
                      <label>Physical</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="eventType" value="online" checked={eventData.type === 'online'} onChange={e => setEventData(state => ({ ...state, type: e.target.value }))} />
                      <label>Online</label>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="whoCanAttend flex-2">Who Can Attend?</label>
                  <input id="whoCanAttend" type="text" placeholder="Everyone whom studies or studied at AYBU" value={eventData.whoCanAttend} onChange={e => setEventData(state => ({ ...state, whoCanAttend: e.target.value }))} />
                </div>
                <div className="input-group flex-2">
                  <label htmlFor="participantLimit">Participant Limit</label>
                  <Select
                    name="participantLimit"
                    options={eventData.participantLimit.options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="eventLocation">Location</label>
                  <input type="text" id="eventLocation" value={eventData.address} onChange={e => setEventData(state => ({ ...state, address: e.target.value }))} />
                </div>
              </div>
              <div className="button-group">
                <button className="btn btn--warning" onClick={e => handleButton(e)}>Discard</button>
                <button className="btn" onClick={e => handleButton(e)}>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>}
      {/* Donation Modal */}
      {activeModal === "donation" && <div className="modal-wrapper">
        <div className="modal">
          <div className="modal__header">
            <h3>Make donation</h3>
            <button onClick={() => setActiveModal("none")}><CloseIcon /></button>
          </div>
          <img className="modal__photo" src={donationPhoto} alt="donation" />
          <div className="modal__body">
            <form action="#">
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="donationTitle">Donation Title</label>
                  <input id="donationTitle" type="text" placeholder="Example Donation" value={donationData.title} onChange={e => setDonationData(state => ({ ...state, title: e.target.value }))} />
                </div>
                <div className="input-group flex-3">
                  <label htmlFor="donationType">Donation Type</label>
                  <div className="radio-group">
                    <div className="radio">
                      <input type="radio" name="donationType" value="money" checked={donationData.type === 'money'} onChange={e => setDonationData(state => ({ ...state, type: e.target.value }))} />
                      <label>Money</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="donationType" value="book" checked={donationData.type === 'book'} onChange={e => setDonationData(state => ({ ...state, type: e.target.value }))} />
                      <label>Book</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="donationType" value="internship" checked={donationData.type === 'internship'} onChange={e => setDonationData(state => ({ ...state, type: e.target.value }))} />
                      <label>Internship</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="donationType" value="construction" checked={donationData.type === 'construction'} onChange={e => setDonationData(state => ({ ...state, type: e.target.value }))} />
                      <label>Construction</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="donationType" value="other" checked={donationData.type === 'other'} onChange={e => setDonationData(state => ({ ...state, type: e.target.value }))} />
                      <label>Other</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="donatedBy">Donated By</label>
                  <input id="donatedBy" type="text" placeholder="Anonymous Donater" value={donationData.donatedBy} onChange={e => setDonationData(state => ({ ...state, donatedBy: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="donatedTo">Donated To</label>
                  <input id="donatedTo" type="text" placeholder="Distributed Evenly to All Engineering Clubs" value={donationData.donatedTo} onChange={e => setDonationData(state => ({ ...state, donatedTo: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label htmlFor="amount">Amount</label>
                  <input id="amount" type="number" placeholder="$100.000,000" value={donationData.amount} onChange={e => setDonationData(state => ({ ...state, amount: parseInt(e.target.value) }))} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="additionalInfo">Additional Info</label>
                  <textarea id="additionalInfo" placeholder="Example description..." value={donationData.additionalInfo} onChange={e => setDonationData(state => ({ ...state, additionalInfo: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="paymentType">Payment Type</label>
                  <div className="radio-group">
                    <div className="radio">
                      <input type="radio" name="paymentType" value="creditCard" checked={donationData.paymentType === 'creditCard'} onChange={e => setDonationData(state => ({ ...state, paymentType: e.target.value }))} />
                      <label>Credit Card</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="paymentType" value="eft" checked={donationData.paymentType === 'eft'} onChange={e => setDonationData(state => ({ ...state, paymentType: e.target.value }))} />
                      <label>EFT</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="paymentType" value="check" checked={donationData.paymentType === 'check'} onChange={e => setDonationData(state => ({ ...state, paymentType: e.target.value }))} />
                      <label>Check</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="paymentType" value="other" checked={donationData.paymentType === 'other'} onChange={e => setDonationData(state => ({ ...state, paymentType: e.target.value }))} />
                      <label>Other</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <button className="btn btn--warning" onClick={e => handleButton(e)}>Discard</button>
                <button className="btn" onClick={e => handleButton(e)}>Complete</button>
              </div>
            </form>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Dashboard
