// Dummy Data
const dummyOrganizers = [
    {
        id: 1,
        name: "Royal Events & Weddings",
        type: "Wedding Planner",
        location: "Mumbai, Maharashtra",
        rating: 4.8,
        reviews: 234,
        price: "₹50,000 - ₹5,00,000",
        image: "https://via.placeholder.com/300x200",
        description: "We are a premier event organizing company specializing in creating memorable experiences for all types of occasions.",
        services: ["Wedding Planning", "Decoration", "Catering", "Photography", "Music"],
        experience: "8+ Years",
        eventsCompleted: "500+",
        clientsServed: "1000+",
        teamSize: "25+",
        phone: "+91 98765 43210",
        email: "contact@royalevents.com",
        address: "123, Event Street, Mumbai - 400001"
    },
    {
        id: 2,
        name: "Birthday Bliss",
        type: "Birthday Organizer",
        location: "Delhi, NCR",
        rating: 4.6,
        reviews: 189,
        price: "₹15,000 - ₹1,00,000",
        image: "https://via.placeholder.com/300x200",
        description: "Specializing in creating magical birthday experiences for all ages.",
        services: ["Birthday Planning", "Theme Decoration", "Cake Arrangement", "Entertainment"],
        experience: "5+ Years",
        eventsCompleted: "300+",
        clientsServed: "800+",
        teamSize: "15+",
        phone: "+91 98765 43211",
        email: "info@birthdaybliss.com",
        address: "456, Party Lane, Delhi - 110001"
    },
    {
        id: 3,
        name: "Corporate Connect",
        type: "Corporate Event Organizer",
        location: "Bangalore, Karnataka",
        rating: 4.7,
        reviews: 156,
        price: "₹75,000 - ₹10,00,000",
        image: "https://via.placeholder.com/300x200",
        description: "Professional corporate event management for conferences, seminars, and team building activities.",
        services: ["Corporate Events", "Conference Management", "Team Building", "Product Launches"],
        experience: "10+ Years",
        eventsCompleted: "750+",
        clientsServed: "200+",
        teamSize: "40+",
        phone: "+91 98765 43212",
        email: "events@corporateconnect.com",
        address: "789, Business Park, Bangalore - 560001"
    },
    {
        id: 4,
        name: "Party Perfect",
        type: "Party Organizer",
        location: "Pune, Maharashtra",
        rating: 4.5,
        reviews: 98,
        price: "₹20,000 - ₹2,00,000",
        image: "https://via.placeholder.com/300x200",
        description: "Making every party unforgettable with creative themes and perfect execution.",
        services: ["Party Planning", "DJ Services", "Catering", "Decoration"],
        experience: "6+ Years",
        eventsCompleted: "400+",
        clientsServed: "900+",
        teamSize: "20+",
        phone: "+91 98765 43213",
        email: "party@partyperfect.com",
        address: "321, Fun Street, Pune - 411001"
    },
    {
        id: 5,
        name: "Gourmet Caterers",
        type: "Catering Service",
        location: "Hyderabad, Telangana",
        rating: 4.9,
        reviews: 312,
        price: "₹300 - ₹1500 per plate",
        image: "https://via.placeholder.com/300x200",
        description: "Exquisite catering services for all occasions with diverse cuisine options.",
        services: ["Wedding Catering", "Corporate Catering", "Party Catering", "Live Counters"],
        experience: "12+ Years",
        eventsCompleted: "1000+",
        clientsServed: "2500+",
        teamSize: "50+",
        phone: "+91 98765 43214",
        email: "catering@gourmet.com",
        address: "654, Food Court, Hyderabad - 500001"
    },
    {
        id: 6,
        name: "Decor Dreams",
        type: "Decoration Service",
        location: "Chennai, Tamil Nadu",
        rating: 4.4,
        reviews: 145,
        price: "₹25,000 - ₹3,00,000",
        image: "https://via.placeholder.com/300x200",
        description: "Transforming spaces into beautiful venues with creative decoration solutions.",
        services: ["Wedding Decoration", "Theme Decoration", "Floral Arrangement", "Lighting"],
        experience: "7+ Years",
        eventsCompleted: "350+",
        clientsServed: "700+",
        teamSize: "18+",
        phone: "+91 98765 43215",
        email: "decor@decordreams.com",
        address: "987, Art Avenue, Chennai - 600001"
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedOrganizers();
    loadOrganizers();
    loadProfileData();
});

// Load featured organizers on home page
function loadFeaturedOrganizers() {
    const featuredContainer = document.getElementById('featuredOrganizers');
    if (!featuredContainer) return;
    
    const featured = dummyOrganizers.slice(0, 3);
    featuredContainer.innerHTML = featured.map(organizer => createOrganizerCard(organizer)).join('');
}

// Load organizers on listing page
function loadOrganizers() {
    const organizersGrid = document.getElementById('organizersGrid');
    if (!organizersGrid) return;
    
    organizersGrid.innerHTML = dummyOrganizers.map(organizer => createOrganizerCard(organizer)).join('');
}

// Create organizer card HTML
function createOrganizerCard(organizer) {
    return `
        <div class="organizer-card">
            <img src="${organizer.image}" alt="${organizer.name}" class="organizer-image">
            <div class="organizer-info">
                <h3 class="organizer-name">${organizer.name}</h3>
                <p class="organizer-type">${organizer.type}</p>
                <p class="organizer-location">
                    <i class="fas fa-map-marker-alt"></i> ${organizer.location}
                </p>
                <div class="organizer-rating">
                    <span class="stars">
                        ${generateStars(organizer.rating)}
                    </span>
                    <span>${organizer.rating} (${organizer.reviews} reviews)</span>
                </div>
                <div class="organizer-price">${organizer.price}</div>
                <button class="view-details-btn" onclick="viewProfile(${organizer.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Navigate to listing page
function navigateToListing(category) {
    window.location.href = `listing.html?category=${category}`;
}

// Search organizers
function searchOrganizers() {
    const eventType = document.getElementById('eventType').value;
    const location = document.getElementById('location').value;
    
    if (!eventType && !location) {
        alert('Please select an event type or enter a location');
        return;
    }
    
    window.location.href = `listing.html?type=${eventType}&location=${location}`;
}

// View organizer profile
function viewProfile(id) {
    window.location.href = `profile.html?id=${id}`;
}

// Load profile data
function loadProfileData() {
    const urlParams = new URLSearchParams(window.location.search);
    const organizerId = urlParams.get('id');
    
    if (!organizerId) return;
    
    const organizer = dummyOrganizers.find(o => o.id == organizerId);
    if (!organizer) return;
    
    // Update profile page with organizer data
    document.getElementById('organizerName').textContent = organizer.name;
    document.getElementById('rating').textContent = organizer.rating;
    document.getElementById('location').textContent = organizer.location;
    document.getElementById('experience').textContent = organizer.experience;
    document.getElementById('aboutText').textContent = organizer.description;
    document.getElementById('startingPrice').textContent = organizer.price.split(' - ')[0];
    document.getElementById('phoneNumber').textContent = organizer.phone;
    document.getElementById('email').textContent = organizer.email;
    document.getElementById('address').textContent = organizer.address;
    document.getElementById('eventsCompleted').textContent = organizer.eventsCompleted;
    document.getElementById('clientsServed').textContent = organizer.clientsServed;
    document.getElementById('teamSize').textContent = organizer.teamSize;
    
    // Load services
    const servicesList = document.getElementById('servicesList');
    if (servicesList) {
        servicesList.innerHTML = organizer.services.map(service => `
            <div class="service-item">
                <i class="fas fa-check-circle"></i>
                <span>${service}</span>
            </div>
        `).join('');
    }
    
    // Load gallery
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        const galleryImages = [
            'https://via.placeholder.com/150x150',
            'https://via.placeholder.com/150x150',
            'https://via.placeholder.com/150x150',
            'https://via.placeholder.com/150x150',
            'https://via.placeholder.com/150x150',
            'https://via.placeholder.com/150x150'
        ];
        
        galleryGrid.innerHTML = galleryImages.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Event Gallery">
            </div>
        `).join('');
    }
}

// Send requirement (UI only)
function sendRequirement() {
    alert('Thank you for your interest! We will connect you with the organizer soon.');
}

// Apply filters
function applyFilters() {
    const eventTypes = Array.from(document.querySelectorAll('input[name="eventType"]:checked'))
        .map(cb => cb.value);
    const budgets = Array.from(document.querySelectorAll('input[name="budget"]:checked'))
        .map(cb => cb.value);
    const ratings = Array.from(document.querySelectorAll('input[name="rating"]:checked'))
        .map(cb => cb.value);
    
    console.log('Applied filters:', { eventTypes, budgets, ratings });
    
    // In a real app, this would filter the organizers
    // For now, just show a message
    alert('Filters applied! (This is a demo - no actual filtering occurs)');
}

// Sort listings
function sortListings() {
    const sortBy = document.getElementById('sortBy').value;
    console.log('Sorting by:', sortBy);
    
    // In a real app, this would sort the organizers
    // For now, just show a message
    alert(`Sorting by ${sortBy} (This is a demo - no actual sorting occurs)`);
}

// Change page
function changePage(direction) {
    console.log('Changing page:', direction);
    
    // In a real app, this would navigate to different pages
    // For now, just show a message
    alert(`Page navigation (This is a demo - no actual page change occurs)`);
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('mobile-open');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.eventType) {
        errors.push('Please select an event type');
    }
    
    if (!formData.location) {
        errors.push('Please enter a location');
    }
    
    return errors;
}

// Loading state
function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading...</div>';
}

// Error handling
function showError(message) {
    alert(`Error: ${message}`);
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality with debouncing
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    const debouncedSearch = debounce((query) => {
        console.log('Searching for:', query);
        // In a real app, this would perform actual search
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

// Initialize tooltips and other interactive elements
function initializeInteractiveElements() {
    // Add hover effects
    const cards = document.querySelectorAll('.organizer-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click feedback
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeInteractiveElements);
