import os
import pptx
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# 16:9 widescreen dimensions
SLIDE_WIDTH = Inches(13.333)
SLIDE_HEIGHT = Inches(7.5)

prs = Presentation()
prs.slide_width = SLIDE_WIDTH
prs.slide_height = SLIDE_HEIGHT
blank_layout = prs.slide_layouts[6]

assets_dir = r'c:\Users\adjei\OneDrive\Desktop\Personal Website\scratch_ppt_assets'

# Colors
COLOR_BG = RGBColor(250, 250, 250)         # Warm light off-white
COLOR_CARD_BG = RGBColor(255, 255, 255)    # Pure white cards
COLOR_CARD_BORDER = RGBColor(226, 232, 240)# Subtle border
COLOR_TEXT_MAIN = RGBColor(24, 24, 27)     # Deep charcoal #18181b
COLOR_TEXT_MUTED = RGBColor(100, 116, 139) # Slate grey #64748b
COLOR_ACCENT = RGBColor(30, 58, 138)       # Navy blue #1e3a8a
COLOR_ACCENT_LINE = RGBColor(203, 213, 225)# Light divider #cbd5e1
COLOR_STAT = RGBColor(15, 23, 42)          # Bold dark #0f172a

FONT_TITLE = "Georgia"
FONT_BODY = "Calibri"

def set_slide_bg(slide, color=COLOR_BG):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT)
    bg.fill.solid()
    bg.fill.fore_color.rgb = color
    bg.line.fill.background() # No border
    return bg

def add_header(slide, section_tag, title, subtitle):
    # Section tag (e.g. 0 1 / P R O J E C T)
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.45), Inches(11.7), Inches(0.35))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    tf_tag.margin_left = tf_tag.margin_top = tf_tag.margin_right = tf_tag.margin_bottom = 0
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = section_tag
    p_tag.font.name = FONT_BODY
    p_tag.font.size = Pt(10)
    p_tag.font.bold = True
    p_tag.font.color.rgb = COLOR_TEXT_MUTED

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.75), Inches(11.7), Inches(0.65))
    tf_title = title_box.text_frame
    tf_title.word_wrap = True
    tf_title.margin_left = tf_title.margin_top = tf_title.margin_right = tf_title.margin_bottom = 0
    p_title = tf_title.paragraphs[0]
    p_title.text = title
    p_title.font.name = FONT_TITLE
    p_title.font.size = Pt(26)
    p_title.font.bold = True
    p_title.font.color.rgb = COLOR_TEXT_MAIN

    # Subtitle
    sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.35))
    tf_sub = sub_box.text_frame
    tf_sub.word_wrap = True
    tf_sub.margin_left = tf_sub.margin_top = tf_sub.margin_right = tf_sub.margin_bottom = 0
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = subtitle
    p_sub.font.name = FONT_BODY
    p_sub.font.size = Pt(11)
    p_sub.font.italic = True
    p_sub.font.color.rgb = COLOR_TEXT_MUTED

    # Divider line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.8), Inches(11.733), Inches(0.015))
    line.fill.solid()
    line.fill.fore_color.rgb = COLOR_ACCENT_LINE
    line.line.fill.background()

# ==========================================================
# SLIDE 1: PROFILE
# ==========================================================
slide1 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide1)

# Left Column: Photo & Name
photo_path = os.path.join(assets_dir, 'p1_img6_Image25.jpg')
if os.path.exists(photo_path):
    slide1.shapes.add_picture(photo_path, Inches(0.8), Inches(0.8), Inches(4.2), Inches(5.2))

name_box = slide1.shapes.add_textbox(Inches(0.8), Inches(6.15), Inches(4.2), Inches(0.6))
tf_name = name_box.text_frame
tf_name.margin_left = tf_name.margin_top = tf_name.margin_right = tf_name.margin_bottom = 0
p_name = tf_name.paragraphs[0]
p_name.text = "Hafiz Adjei"
p_name.font.name = FONT_TITLE
p_name.font.size = Pt(28)
p_name.font.bold = True
p_name.font.color.rgb = COLOR_TEXT_MAIN

line_name = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.8), Inches(4.2), Inches(0.03))
line_name.fill.solid()
line_name.fill.fore_color.rgb = COLOR_TEXT_MAIN
line_name.line.fill.background()

# Right Column: Education & Achievements & Expertise
right_left = Inches(5.4)
right_top = Inches(0.9)

# Edu 1: MS
cap1_icon = os.path.join(assets_dir, 'p1_img0_Image9.png')
if os.path.exists(cap1_icon):
    slide1.shapes.add_picture(cap1_icon, right_left, right_top + Inches(0.05), Inches(0.35), Inches(0.35))
box_edu1 = slide1.shapes.add_textbox(right_left + Inches(0.55), right_top, Inches(6.8), Inches(0.75))
tf_edu1 = box_edu1.text_frame
tf_edu1.word_wrap = True
tf_edu1.margin_left = tf_edu1.margin_top = tf_edu1.margin_right = tf_edu1.margin_bottom = 0
p = tf_edu1.paragraphs[0]
p.text = "MS, Electrical & Computer Engineering"
p.font.name = FONT_BODY
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN
p2 = tf_edu1.add_paragraph()
p2.text = "Carnegie Mellon University Kigali Campus"
p2.font.name = FONT_BODY
p2.font.size = Pt(12)
p2.font.color.rgb = COLOR_TEXT_MUTED

# Edu 2: BS
cap2_icon = os.path.join(assets_dir, 'p1_img1_Image15.png')
if os.path.exists(cap2_icon):
    slide1.shapes.add_picture(cap2_icon, right_left, right_top + Inches(1.15), Inches(0.35), Inches(0.35))
box_edu2 = slide1.shapes.add_textbox(right_left + Inches(0.55), right_top + Inches(1.1), Inches(6.8), Inches(0.75))
tf_edu2 = box_edu2.text_frame
tf_edu2.word_wrap = True
tf_edu2.margin_left = tf_edu2.margin_top = tf_edu2.margin_right = tf_edu2.margin_bottom = 0
p = tf_edu2.paragraphs[0]
p.text = "BS, Electrical & Electronic Engineering"
p.font.name = FONT_BODY
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN
p2 = tf_edu2.add_paragraph()
p2.text = "Ashesi University · Ghana"
p2.font.name = FONT_BODY
p2.font.size = Pt(12)
p2.font.color.rgb = COLOR_TEXT_MUTED

# Distinctions: MasterCard & Harvard
badge_icon = os.path.join(assets_dir, 'p1_img2_Image17.png')
if os.path.exists(badge_icon):
    slide1.shapes.add_picture(badge_icon, right_left, right_top + Inches(2.25), Inches(0.35), Inches(0.35))
box_dist = slide1.shapes.add_textbox(right_left + Inches(0.55), right_top + Inches(2.2), Inches(6.8), Inches(0.75))
tf_dist = box_dist.text_frame
tf_dist.word_wrap = True
tf_dist.margin_left = tf_dist.margin_top = tf_dist.margin_right = tf_dist.margin_bottom = 0
p = tf_dist.paragraphs[0]
p.text = "Mastercard Foundation Scholar"
p.font.name = FONT_BODY
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN
p2 = tf_dist.add_paragraph()
p2.text = "Harvard HSIL Venture Building Program"
p2.font.name = FONT_BODY
p2.font.size = Pt(12)
p2.font.color.rgb = COLOR_TEXT_MUTED

# Divider before Expertise
div_exp = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, right_left, right_top + Inches(3.25), Inches(7.0), Inches(0.015))
div_exp.fill.solid()
div_exp.fill.fore_color.rgb = COLOR_ACCENT_LINE
div_exp.line.fill.background()

# Expertise Header
box_exp_lbl = slide1.shapes.add_textbox(right_left, right_top + Inches(3.45), Inches(7.0), Inches(0.3))
tf_exp_lbl = box_exp_lbl.text_frame
tf_exp_lbl.margin_left = tf_exp_lbl.margin_top = tf_exp_lbl.margin_right = tf_exp_lbl.margin_bottom = 0
p_exp_lbl = tf_exp_lbl.paragraphs[0]
p_exp_lbl.text = "E X P E R T I S E"
p_exp_lbl.font.name = FONT_BODY
p_exp_lbl.font.size = Pt(11)
p_exp_lbl.font.bold = True
p_exp_lbl.font.color.rgb = COLOR_TEXT_MUTED

# 4 Expertise items in 2x2 grid
exp_items = [
    ("Embedded Systems", 'p1_img3_Image19.png', right_left, right_top + Inches(3.95)),
    ("Ambient & Pervasive Sensing", 'p1_img4_Image21.png', right_left + Inches(3.6), right_top + Inches(3.95)),
    ("Edge ML & TinyML", 'p1_img5_Image23.png', right_left, right_top + Inches(5.1)),
    ("IoT Systems & Networking", 'p2_img2_Image39.png', right_left + Inches(3.6), right_top + Inches(5.1)),
]

for title, icon_file, item_x, item_y in exp_items:
    icon_p = os.path.join(assets_dir, icon_file)
    if os.path.exists(icon_p):
        slide1.shapes.add_picture(icon_p, item_x, item_y + Inches(0.02), Inches(0.35), Inches(0.35))
    box_it = slide1.shapes.add_textbox(item_x + Inches(0.5), item_y, Inches(3.0), Inches(0.6))
    tf_it = box_it.text_frame
    tf_it.word_wrap = True
    tf_it.margin_left = tf_it.margin_top = tf_it.margin_right = tf_it.margin_bottom = 0
    p = tf_it.paragraphs[0]
    p.text = title
    p.font.name = FONT_BODY
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = COLOR_TEXT_MAIN


# ==========================================================
# SLIDE 2: IMARACARE (PROJECT 01)
# ==========================================================
slide2 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide2)
add_header(slide2, "0 1 / P R O J E C T", "ImaraCare — Contactless Vital Sign Monitor", "Wi-Fi CSI · On-Device LSTM · ESP32 · Best Poster Award (CMU Africa Research Showcase)")

col_w = Inches(5.6)
top_y = Inches(2.05)

# Card 1: Problem
p_box = slide2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), top_y, col_w, Inches(1.65))
p_box.fill.solid()
p_box.fill.fore_color.rgb = COLOR_CARD_BG
p_box.line.color.rgb = COLOR_CARD_BORDER
tf_p = p_box.text_frame
tf_p.word_wrap = True
tf_p.margin_left = tf_p.margin_right = Inches(0.3)
tf_p.margin_top = tf_p.margin_bottom = Inches(0.2)
p = tf_p.paragraphs[0]
p.text = "The Challenge"
p.font.name = FONT_TITLE
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN
p_body = tf_p.add_paragraph()
p_body.text = "1 newborn dies every 2 minutes in Sub-Saharan Africa. 75% of hypoxaemia cases are preventable with continuous monitoring. However, conventional monitors require contact electrodes that are fragile, cause skin trauma, and are scarce in low-resource NICUs."
p_body.font.name = FONT_BODY
p_body.font.size = Pt(10.5)
p_body.font.color.rgb = COLOR_TEXT_MUTED
p_body.space_before = Pt(4)

# Card 2: Solution
s_box = slide2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.9), top_y, col_w, Inches(1.65))
s_box.fill.solid()
s_box.fill.fore_color.rgb = COLOR_CARD_BG
s_box.line.color.rgb = COLOR_CARD_BORDER
tf_s = s_box.text_frame
tf_s.word_wrap = True
tf_s.margin_left = tf_s.margin_right = Inches(0.3)
tf_s.margin_top = tf_s.margin_bottom = Inches(0.2)
p = tf_s.paragraphs[0]
p.text = "The Solution"
p.font.name = FONT_TITLE
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN
s_body = tf_s.add_paragraph()
s_body.text = "Two ESP32 Wi-Fi transceivers placed across the cot capture fine-grained Channel State Information (CSI) disturbances. An on-device LSTM extracts heart rate and respiration patterns in real-time, completely contact-free and decoupled from cloud connectivity."
s_body.font.name = FONT_BODY
s_body.font.size = Pt(10.5)
s_body.font.color.rgb = COLOR_TEXT_MUTED
s_body.space_before = Pt(4)

# Three Stat Callouts
stat_y = Inches(3.9)
stat_w = Inches(3.64)
stats = [
    ("97.95%", "HR Accuracy", "±1.5 BPM clinical agreement"),
    ("30+", "Validation Sessions", "Adult volunteers & bench trials"),
    ("580 KB", "On-Device LSTM", "Runs directly on ESP32 SRAM"),
]

for idx, (num, lbl, sub) in enumerate(stats):
    sx = Inches(0.8) + idx * Inches(4.04)
    stat_box = slide2.shapes.add_shape(MSO_SHAPE.RECTANGLE, sx, stat_y, stat_w, Inches(1.15))
    stat_box.fill.solid()
    stat_box.fill.fore_color.rgb = COLOR_CARD_BG
    stat_box.line.color.rgb = COLOR_CARD_BORDER
    tf = stat_box.text_frame
    tf.word_wrap = True
    tf.margin_top = Inches(0.12)
    tf.margin_left = tf.margin_right = Inches(0.2)
    p_num = tf.paragraphs[0]
    p_num.text = num
    p_num.font.name = FONT_TITLE
    p_num.font.size = Pt(26)
    p_num.font.bold = True
    p_num.font.color.rgb = COLOR_ACCENT
    p_lbl = tf.add_paragraph()
    p_lbl.text = lbl + "  ·  " + sub
    p_lbl.font.name = FONT_BODY
    p_lbl.font.size = Pt(9.5)
    p_lbl.font.color.rgb = COLOR_TEXT_MUTED

# Bottom Box: Signal Pipeline & What This Taught Me
pipe_box = slide2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(5.25), Inches(11.733), Inches(1.85))
pipe_box.fill.solid()
pipe_box.fill.fore_color.rgb = COLOR_CARD_BG
pipe_box.line.color.rgb = COLOR_CARD_BORDER
tf_pipe = pipe_box.text_frame
tf_pipe.word_wrap = True
tf_pipe.margin_left = tf_pipe.margin_right = Inches(0.3)
tf_pipe.margin_top = Inches(0.16)

p = tf_pipe.paragraphs[0]
p.text = "Signal Processing & Inference Pipeline:"
p.font.name = FONT_BODY
p.font.size = Pt(11)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN

p_pipe = tf_pipe.add_paragraph()
p_pipe.text = "Raw Wi-Fi CSI Amplitude  →  DC Removal  →  Butterworth Bandpass Filter  →  Savitzky-Golay Smoothing  →  Peak Detection & LSTM Inference"
p_pipe.font.name = FONT_BODY
p_pipe.font.size = Pt(10.5)
p_pipe.font.color.rgb = COLOR_ACCENT
p_pipe.space_before = Pt(3)

p_teach = tf_pipe.add_paragraph()
p_teach.text = "Key Research Insights:"
p_teach.font.name = FONT_BODY
p_teach.font.size = Pt(11)
p_teach.font.bold = True
p_teach.font.color.rgb = COLOR_TEXT_MAIN
p_teach.space_before = Pt(8)

p_t1 = tf_pipe.add_paragraph()
p_t1.text = "• Signal processing & deep learning must be co-designed: Pre-filtering noise and phase drift is critical before feeding into compact models.\n• Extreme hardware constraints force algorithmic efficiency: Successfully compressed temporal neural network to run inside 580 KB embedded SRAM.\n• Direct relevance to PANS Lab: Bridges contactless physical RF disturbances with robust human-centric sensing in uncontrolled environments."
p_t1.font.name = FONT_BODY
p_t1.font.size = Pt(10)
p_t1.font.color.rgb = COLOR_TEXT_MUTED
p_t1.space_before = Pt(3)


# ==========================================================
# SLIDE 3: CIRCULAR MICROGRIDS (PROJECT 02)
# ==========================================================
slide3 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide3)
add_header(slide3, "0 2 / P R O J E C T", "Circular Microgrids: Battery Intelligence", "BAE Systems LiFePO4 · UART Protocol Reverse-Engineering · Resistance Estimation · Ampersand Rwanda")

# Intro context banner
banner_box = slide3.shapes.add_textbox(Inches(0.8), Inches(1.95), Inches(11.733), Inches(0.6))
tf_b = banner_box.text_frame
tf_b.word_wrap = True
tf_b.margin_left = tf_b.margin_top = tf_b.margin_right = tf_b.margin_bottom = 0
p = tf_b.paragraphs[0]
p.text = "The Circular Microgrids project repurposes decommissioned EV battery packs (BAE Systems / A123, 40V, 736Wh) into second-life energy storage infrastructure for off-grid and microgrid contexts across Rwanda, bridging legacy industrial hardware with modern real-time cloud/edge telemetry."
p.font.name = FONT_BODY
p.font.size = Pt(11)
p.font.color.rgb = COLOR_TEXT_MUTED

c_w = Inches(3.75)
c_gap = Inches(0.24)
top_c = Inches(2.65)
card_h = Inches(4.45)

cols = [
    ("Protocol Reverse-Engineering", [
        ("Decoded Proprietary UART", "Decoded proprietary 5V TTL UART protocol from legacy 2008 BAE Systems modules with zero documentation."),
        ("Signal Capture Methodology", "Logic analyzer packet capture → byte-pattern correlation with measured electrical states → CRC-8 packet validation."),
        ("Multi-Drop Bus Topology", "Implemented multi-module daisy-chain addressing and wired-OR RX bus to poll 3 battery modules simultaneously without packet collisions."),
        ("Full-Stack Implementation", "Engineered Python serial library, Flask REST API, and real-time dashboard on Raspberry Pi 4.")
    ]),
    ("Resistance Estimation & ML", [
        ("Controlled Load Testing", "Captured synchronized voltage-current transients under controlled load steps across 96-cell series-parallel groups."),
        ("Feature Extraction", "Extracted per-cell internal resistance profiles and dynamic impedance metrics under varying thermal states."),
        ("Predictive ML Model", "Trained ML model predicting remaining useful capacity and degradation trajectories to prevent mid-route failure."),
        ("Safety Calibration", "Calibrated decision thresholds conservatively: strongly prioritized avoiding on-road vehicle stalls over aggressive capacity use.")
    ]),
    ("Real-World Deployment", [
        ("In-the-Wild Deployment", "Predictions deployed directly at Ampersand e-moto battery swap stations in Kigali, driving data-driven retirement decisions."),
        ("Environmental Compensation", "Integrated continuous temperature logging as a co-variate for LiFePO4 thermal resistance drift correction."),
        ("Deployment Robustness", "Encountered and solved real-world serial bus contention, ground-loop noise, and communication jitter in industrial environments."),
        ("Takeaway for PANS Lab", "Extensive experience solving messy, real-world deployment challenges outside the sanitized laboratory environment.")
    ])
]

for idx, (ctitle, cpoints) in enumerate(cols):
    cx = Inches(0.8) + idx * (c_w + c_gap)
    c_box = slide3.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, top_c, c_w, card_h)
    c_box.fill.solid()
    c_box.fill.fore_color.rgb = COLOR_CARD_BG
    c_box.line.color.rgb = COLOR_CARD_BORDER
    tf = c_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = Inches(0.25)
    tf.margin_top = Inches(0.25)
    
    p = tf.paragraphs[0]
    p.text = ctitle
    p.font.name = FONT_TITLE
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = COLOR_TEXT_MAIN
    
    p_div = tf.add_paragraph()
    p_div.text = "—" * 22
    p_div.font.size = Pt(8)
    p_div.font.color.rgb = COLOR_ACCENT_LINE
    p_div.space_before = Pt(2)
    
    for heading, detail in cpoints:
        p_pt = tf.add_paragraph()
        p_pt.text = f"• {heading}: "
        p_pt.font.name = FONT_BODY
        p_pt.font.size = Pt(9.5)
        p_pt.font.bold = True
        p_pt.font.color.rgb = COLOR_TEXT_MAIN
        p_pt.space_before = Pt(6)
        
        run = p_pt.add_run()
        run.text = detail
        run.font.bold = False
        run.font.color.rgb = COLOR_TEXT_MUTED


# ==========================================================
# SLIDE 4: GREENHOUSE ROBOT & EMBEDDED SYSTEMS (PROJECT 03)
# ==========================================================
slide4 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide4)
add_header(slide4, "0 3 / P R O J E C T", "Autonomous Ground Robot & Edge IoT Deployments", "Autonomous IoT · Embedded Sensor Fusion · Real-Time Environmental Telemetry")

col_w4 = Inches(5.6)
top_y4 = Inches(2.05)

# Left Column: The Challenge & What I Built
c_left = slide4.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), top_y4, col_w4, Inches(4.9))
c_left.fill.solid()
c_left.fill.fore_color.rgb = COLOR_CARD_BG
c_left.line.color.rgb = COLOR_CARD_BORDER
tf_l = c_left.text_frame
tf_l.word_wrap = True
tf_l.margin_left = tf_l.margin_right = Inches(0.3)
tf_l.margin_top = Inches(0.28)

p = tf_l.paragraphs[0]
p.text = "The Challenge"
p.font.name = FONT_TITLE
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN

p_body = tf_l.add_paragraph()
p_body.text = "Manual greenhouse inspection is labor-intensive and prone to delayed responses. Smallholder farmers in Sub-Saharan Africa lack affordable, continuous sensor coverage for microclimate regulation, leading to preventable crop loss."
p_body.font.name = FONT_BODY
p_body.font.size = Pt(10.5)
p_body.font.color.rgb = COLOR_TEXT_MUTED
p_body.space_before = Pt(4)

p_div = tf_l.add_paragraph()
p_div.text = "—" * 38
p_div.font.size = Pt(8)
p_div.font.color.rgb = COLOR_ACCENT_LINE
p_div.space_before = Pt(8)

p_wib = tf_l.add_paragraph()
p_wib.text = "What I Built & Deployed"
p_wib.font.name = FONT_TITLE
p_wib.font.size = Pt(16)
p_wib.font.bold = True
p_wib.font.color.rgb = COLOR_TEXT_MAIN
p_wib.space_before = Pt(8)

pts = [
    ("Autonomous Patrol Robot", "Engineered ground robot for automated greenhouse patrol using line-following and obstacle avoidance algorithms."),
    ("Multi-Sensor Fusion", "Synchronized temperature, humidity, CO₂, and ambient light intensity sensors on a resource-constrained microcontroller."),
    ("Low-Power Telemetry", "Implemented ESP-NOW peer-to-peer wireless protocol for reliable data transmission without relying on internet or cellular grids."),
    ("Companion Project (Smart City Parking)", "Designed low-cost smart parking node integrating inductive loop sensing, ultrasonic validation, and edge filtering for high-accuracy vehicle occupancy.")
]

for title, detail in pts:
    p_item = tf_l.add_paragraph()
    p_item.text = f"• {title}: "
    p_item.font.name = FONT_BODY
    p_item.font.size = Pt(10)
    p_item.font.bold = True
    p_item.font.color.rgb = COLOR_TEXT_MAIN
    p_item.space_before = Pt(5)
    run = p_item.add_run()
    run.text = detail
    run.font.bold = False
    run.font.color.rgb = COLOR_TEXT_MUTED


# Right Column: Key Outcome & Skills Developed
c_right = slide4.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.9), top_y4, col_w4, Inches(4.9))
c_right.fill.solid()
c_right.fill.fore_color.rgb = COLOR_CARD_BG
c_right.line.color.rgb = COLOR_CARD_BORDER
tf_r = c_right.text_frame
tf_r.word_wrap = True
tf_r.margin_left = tf_r.margin_right = Inches(0.3)
tf_r.margin_top = Inches(0.28)

p = tf_r.paragraphs[0]
p.text = "Key Outcome & Impact"
p.font.name = FONT_TITLE
p.font.size = Pt(16)
p.font.bold = True
p.font.color.rgb = COLOR_TEXT_MAIN

p_body = tf_r.add_paragraph()
p_body.text = "Enabled continuous, data-driven environmental optimization without expensive fixed infrastructure. Proved that low-cost, off-the-shelf microcontrollers and intelligent firmware can solve high-stakes sensing problems in underserved communities."
p_body.font.name = FONT_BODY
p_body.font.size = Pt(10.5)
p_body.font.color.rgb = COLOR_TEXT_MUTED
p_body.space_before = Pt(4)

p_div = tf_r.add_paragraph()
p_div.text = "—" * 38
p_div.font.size = Pt(8)
p_div.font.color.rgb = COLOR_ACCENT_LINE
p_div.space_before = Pt(8)

p_skl = tf_r.add_paragraph()
p_skl.text = "Core Competencies Mastered"
p_skl.font.name = FONT_TITLE
p_skl.font.size = Pt(16)
p_skl.font.bold = True
p_skl.font.color.rgb = COLOR_TEXT_MAIN
p_skl.space_before = Pt(8)

sk_pts = [
    ("Embedded Firmware & RTOS", "Interrupt-driven acquisition, sensor drivers, FreeRTOS task scheduling on microcontrollers (ESP32, STM32, KL25Z)."),
    ("Constrained Wireless Systems", "Sub-GHz, LoRaWAN, ESP-NOW, and Bluetooth architectures designed for battery-operated field deployment."),
    ("Deployment-First Mentality", "Designing physical enclosures, dealing with environmental noise, dust, humidity, and real-world system failures.")
]

for title, detail in sk_pts:
    p_item = tf_r.add_paragraph()
    p_item.text = f"• {title}: "
    p_item.font.name = FONT_BODY
    p_item.font.size = Pt(10)
    p_item.font.bold = True
    p_item.font.color.rgb = COLOR_TEXT_MAIN
    p_item.space_before = Pt(6)
    run = p_item.add_run()
    run.text = detail
    run.font.bold = False
    run.font.color.rgb = COLOR_TEXT_MUTED


# ==========================================================
# SLIDE 5: RESEARCH VISION & PANS LAB ALIGNMENT (SLIDE 04)
# ==========================================================
slide5 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide5)
add_header(slide5, "0 4 / R E S E A R C H   V I S I O N", "Pervasive Sensing & Edge Intelligence", "Bridging constrained edge hardware and robust, real-world inference in unstructured environments")

# Context banner
banner5 = slide5.shapes.add_textbox(Inches(0.8), Inches(1.95), Inches(11.733), Inches(0.6))
tf_b5 = banner5.text_frame
tf_b5.word_wrap = True
tf_b5.margin_left = tf_b5.margin_top = tf_b5.margin_right = tf_b5.margin_bottom = 0
p = tf_b5.paragraphs[0]
p.text = "Sensor systems routinely achieve high accuracy in controlled lab conditions, but degrade significantly when deployed across real-world homes and unstructured settings. My PhD goal is to bridge this gap by designing self-sustaining, edge-intelligent sensing systems tailored for ambient intelligence."
p.font.name = FONT_BODY
p.font.size = Pt(11)
p.font.color.rgb = COLOR_TEXT_MUTED

pillars = [
    ("Cross-Context Generalization", "p5_img0_Image61.png", [
        ("The Challenge", "Physical environment geometry, structural dynamics, and occupant habits introduce substantial domain variance."),
        ("Core Research Question", "How do we design ambient sensing pipelines that maintain clinically meaningful accuracy without requiring extensive site-specific retraining?"),
        ("Proposed Direction", "Leveraging physics-informed priors and self-supervised pretraining to extract invariant spatial-temporal representations.")
    ]),
    ("Multimodal Collaborative Learning", "p5_img1_Image63.png", [
        ("The Challenge", "In real deployments, single modalities degrade due to line-of-sight obstruction, environmental noise, or sensor tampering."),
        ("Core Research Question", "How can an ambient system dynamically adapt reliance across complementary modalities (e.g. Wi-Fi CSI, vibration/geophones, acoustics)?"),
        ("Proposed Direction", "Developing adaptive cross-modal fusion and confidence weighting to preserve system reliability even when individual sensors fail.")
    ]),
    ("Constrained Edge-Native Deployment", "p5_img2_Image65.png", [
        ("The Challenge", "Streaming continuous high-rate sensing data (e.g. 7kHz geophone or Wi-Fi CSI) causes network congestion, cloud cost, and privacy concerns."),
        ("Core Research Question", "What are the minimal compute & memory envelopes for running lightweight temporal models (TCNs, quantized LSTMs) on-device?"),
        ("Proposed Direction", "Developing hardware-aware model quantization and edge inference pipelines directly on microcontrollers (ESP32) for privacy and zero latency.")
    ])
]

top_p = Inches(2.65)
card_hp = Inches(4.45)

for idx, (ptitle, picon, ppoints) in enumerate(pillars):
    px = Inches(0.8) + idx * (c_w + c_gap)
    p_card = slide5.shapes.add_shape(MSO_SHAPE.RECTANGLE, px, top_p, c_w, card_hp)
    p_card.fill.solid()
    p_card.fill.fore_color.rgb = COLOR_CARD_BG
    p_card.line.color.rgb = COLOR_CARD_BORDER
    tf = p_card.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = Inches(0.25)
    tf.margin_top = Inches(0.22)
    
    icon_fp = os.path.join(assets_dir, picon)
    if os.path.exists(icon_fp):
        slide5.shapes.add_picture(icon_fp, px + Inches(0.25), top_p + Inches(0.22), Inches(0.35), Inches(0.35))
        tf.margin_top = Inches(0.65)
    
    p = tf.paragraphs[0]
    p.text = ptitle
    p.font.name = FONT_TITLE
    p.font.size = Pt(13.5)
    p.font.bold = True
    p.font.color.rgb = COLOR_TEXT_MAIN
    
    p_div = tf.add_paragraph()
    p_div.text = "—" * 22
    p_div.font.size = Pt(8)
    p_div.font.color.rgb = COLOR_ACCENT_LINE
    p_div.space_before = Pt(2)
    
    for subhead, text in ppoints:
        p_pt = tf.add_paragraph()
        p_pt.text = f"{subhead}: "
        p_pt.font.name = FONT_BODY
        p_pt.font.size = Pt(9.5)
        p_pt.font.bold = True
        p_pt.font.color.rgb = COLOR_ACCENT
        p_pt.space_before = Pt(6)
        
        run = p_pt.add_run()
        run.text = text
        run.font.bold = False
        run.font.color.rgb = COLOR_TEXT_MUTED

# Save presentation
out_pptx = r'c:\Users\adjei\OneDrive\Desktop\Personal Website\Hafiz_Adjei_PANS_Lab_Interview.pptx'
prs.save(out_pptx)
print("Successfully created presentation at:", out_pptx)
