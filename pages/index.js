import Page from "../_/Page";
import PageContainer from "../_/PageContainer";
import Assignments from "../_/Assignments";
import AssignmentAlgorithm from "../_/AssignmentAlgorithm";

export default function Home() {
  return (
    <Page title="Assignments">
      <PageContainer>
        <Assignments>
          <AssignmentAlgorithm />
        </Assignments>
      </PageContainer>
    </Page>
  );
}
