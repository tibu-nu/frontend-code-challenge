{
  /**
   * NOT PART OF ASSIGNMENT
   * This part of the code is not part of the assignment
   */
}
import Page from "../_/Page";
import PageContainer from "../_/PageContainer";
import Assignments from "../_/Assignments";
import AssignmentAlgorithm from "../_/AssignmentAlgorithm";
import AssignmentBug from "../_/AssignmentBug";
import AssignmentDesign from "../_/AssignmentDesign";
import MainMenuView from "../components/MainMenuView";

export default function Home(props) {
  return (
    <Page title="Assignments">
      <PageContainer>
        <Assignments>
          <AssignmentAlgorithm />
          <AssignmentBug filePath={process.env.basePath}>
            <MainMenuView />
          </AssignmentBug>
          <AssignmentDesign>
            {/**
             * withDefaults is only here so that you're not blocked if you didn't complete the previous assignment
             */}
            <MainMenuView withDefaults />
          </AssignmentDesign>
        </Assignments>
      </PageContainer>
    </Page>
  );
}
