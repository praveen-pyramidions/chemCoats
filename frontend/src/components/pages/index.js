import Home01 from "./Home01";
import Home02 from "./Home02";
import AboutUs from "./AboutUs";
import AboutDetails from "./AboutDetails";
import AboutTeam from "./AboutTeam";
import AboutCarres from "./AboutCarres";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";

// Additional Route For Service Detail

import ServiceDetailPolyUrethaneFlooring from "./ServiceDetailPolyUrethaneFlooring";
import ServiceDetailDiElecricFlooring from "./ServiceDetailDiElecricFlooring";
import ServiceDetailAntiStaticEpoxyFlooring from "./ServiceDetailAntiStaticEpoxyFlooring";
import ServiceDetailEsdFlooring from "./ServiceDetailEsdFlooring";
import ServiceDetailAccessFloors from "./ServiceDetailAccessFloors";
import ServiceDetailCarParkDeckFlooring from "./ServiceDetailCarParkDeckFlooring";
import ServiceDetailSportsFlooring from "./ServiceDetailSportsFlooring";
import ServiceDetailCleanRoomFlooring from "./ServiceDetailCleanRoomFlooring";
import ServiceDetailHeavyDutyEpoxyFlooring from "./ServiceDetailHeavyDutyEpoxyFlooring";
import ServiceDetailHygieneFlooring from "./ServiceDetailHygieneFlooring";
import ServiceDetailSelfLevelingEpoxyFlooring from "./ServiceDetailSelfLevelingEpoxyFlooring";
import ServiceDetailQuartzFlooring from "./ServiceDetailQuartzFlooring";
import ServiceDetailTerrazoFlooring from "./ServiceDetailTerrazoFlooring";
import ServiceDetailPolishedConcreteFlooring from "./ServiceDetailPolishedConcreteFlooring";
import ServiceDetailExpanisonJoints from "./ServiceDetailExpanisonJoints";

// Additional Route For Project Detail

import ProjectDetailESDAntiStaticFloorforaPharma from "./ProjectDetailESDAntiStaticFloorforaPharma";
import ProjectDetailFoxcon from "./ProjectDetailFoxcon";
import ProjectDetailLuxshare from "./ProjectDetailLuxshare";
import ProjectDetailMandolez from "./ProjectDetailMandolez";
import ProjectDetailSyrmaSGS from "./ProjectDetailSyrmaSGS";
import ProjectDetailAadhiTapeSolutions from "./ProjectDetailAadhiTapeSolutions";
import ProjectDetailFlex from "./ProjectDetailFlex";
import ProjectDetailExeceutedPPTbasedMultiSports from "./ProjectDetailExeceutedPPTbasedMultiSports";
import ProjectDetailSportsProject from "./ProjectDetailSportsProject";
import ProjectDetail from "./ProjectDetail";

import Projects from "./Projects";
import ProjectFullWidth from "./ProjectFullWidth";
import Testimonial from "./Testimonial";
import PricePage from "./PricePage";
import Blog from "./Blog";
import BlogSingle from "./BlogSingle";
import Contact from "./Contact";
import Contact02 from "./Contact02";
import WhyChooseEpoxy from "./WhyChooseEpoxy";
import UncontrolledExample from "./HeroBannerSlider";
import HeroBanner from "./HeroBannerSlider";
import Protect from "../layouts/blog/Authentication/Protected";
import CreateBlog from "../layouts/blog/CreateBlog";
import EditBlog from "../layouts/blog/EditBlog";
import Login from "../layouts/blog/Authentication/LoginPage";

const routes = [
  { path: "/", component: Home01 },
  { path: "/home-02", component: Home02 },
  { path: "/about-us", component: AboutUs },
  { path: "/about-detail", component: AboutDetails },
  { path: "/about-team", component: AboutTeam },
  { path: "/about-carees", component: AboutCarres },
  { path: "/services", component: Services },
  { path: "/services-detail", component: ServiceDetail },
  { path: "/project", component: Projects },
  { path: "/project-full-width", component: ProjectFullWidth },
  { path: "/project-detail", component: ProjectDetail },
  { path: "/page-testimonial", component: Testimonial },
  { path: "/page-pricing", component: PricePage },
  { path: "/blog", component: Blog },
  { path: "/login", component: Login },
  // { path: "/blog-single", component: BlogSingle },
  { path: "/:blogtype/:id", component: BlogSingle },
  //{ path: "/createblog", component: CreateBlog },
  //{ path: "/editblog/:id", component: EditBlog },

  {
    path: "/createblog",
    component: () => (
      <Protect>
        <CreateBlog />
      </Protect>
    ),
  },

  {
    path: "/editblog/:id",
    component: () => (
      <Protect>
        <EditBlog />
      </Protect>
    ),
  },

  { path: "/contact-01", component: Contact },
  { path: "/contact-02", component: Contact02 },
  { path: "/whychooseepoxy", component: WhyChooseEpoxy },
  { path: "/imagecarosel", component: HeroBanner },

  // Additional Route For Service
  {
    path: "/services-detail-polyurethane-flooring",
    component: ServiceDetailPolyUrethaneFlooring,
  },
  {
    path: "/services-detail-di-elecric-flooring",
    component: ServiceDetailDiElecricFlooring,
  },

  {
    path: "/services-detail-anti-static-epoxy-flooring",
    component: ServiceDetailAntiStaticEpoxyFlooring,
  },

  {
    path: "/services-detail-esd-flooring",
    component: ServiceDetailEsdFlooring,
  },

  {
    path: "/services-detail-access-floors", ///this route has no advantages contents
    component: ServiceDetailAccessFloors,
  },

  {
    path: "/services-detail-car-park-deck-flooring",
    component: ServiceDetailCarParkDeckFlooring,
  },

  {
    path: "/services-detail-sports-flooring",
    component: ServiceDetailSportsFlooring,
  },

  {
    path: "/services-detail-di-clean-room-flooring",
    component: ServiceDetailCleanRoomFlooring,
  },

  {
    path: "/services-detail-di-heavy-duty-epoxy-flooring",
    component: ServiceDetailHeavyDutyEpoxyFlooring,
  },

  {
    path: "/services-detail-di-hygiene-flooring",
    component: ServiceDetailHygieneFlooring,
  },

  {
    path: "/services-detail-di-self-leveling-epoxy-flooring",
    component: ServiceDetailSelfLevelingEpoxyFlooring,
  },

  {
    path: "/services-detail-quartz-flooring",
    component: ServiceDetailQuartzFlooring,
  },

  {
    path: "/services-detail-terrazo-flooring",
    component: ServiceDetailTerrazoFlooring,
  },

  {
    path: "/services-detail-di-polished-concrete-flooring",
    component: ServiceDetailPolishedConcreteFlooring,
  },
  {
    path: "/services-detail-di-expanison-joints",
    component: ServiceDetailExpanisonJoints,
  }, /// all done end

  // Additional Route For Project

  {
    path: "/project-detail-esdantistaticfloorforapharma",
    component: ProjectDetailESDAntiStaticFloorforaPharma,
  },
  { path: "/project-detail-foxcon", component: ProjectDetailFoxcon },
  { path: "/project-detail-luxshare", component: ProjectDetailLuxshare },
  { path: "/project-detail-mandolez", component: ProjectDetailMandolez },
  { path: "/project-detail-syrmasgs", component: ProjectDetailSyrmaSGS },
  {
    path: "/project-detail-aadhitapesolutions",
    component: ProjectDetailAadhiTapeSolutions,
  },
  { path: "/project-detail-flex", component: ProjectDetailFlex },
  {
    path: "/project-detail-execeutedpptbasedmultisports",
    component: ProjectDetailExeceutedPPTbasedMultiSports,
  },
  {
    path: "/project-detail-sportsproject",
    component: ProjectDetailSportsProject,
  },
];

export default routes;
