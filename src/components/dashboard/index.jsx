import StatsCard from './StatsCard.jsx'
import wsp from '../../assets/icons/wsp.svg'
import population from '../../assets/icons/population.svg'
import pipeline from '../../assets/icons/pipeline.svg'
import { Badge, Checkbox, Progress, Table } from 'flowbite-react'

const Dashboard = () => (
  <div className="container mx-auto py-12">
    <h1 className="dashboard-heading">Dashboard</h1>
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-6">
      <StatsCard
        label="WSPs"
        stat={96}
        trend="increase"
        trendStat={3}
        icon={wsp}
      />

      <StatsCard
        label="SSSPs"
        stat="1,763"
        trend="decrease"
        trendStat={9}
        icon={wsp}
      />

      <StatsCard
        label="Population served"
        stat="18m"
        trend="decrease"
        trendStat={12}
        icon={population}
      />

      <StatsCard
        label="Pipeline length"
        stat="183,946m"
        trend="increase"
        trendStat={7}
        icon={pipeline}
      />
    </div>

    <h1 className="dashboard-heading mt-12">Latest user requests</h1>
    <h2 className="font-bold mt-6 mb-2 uppercase">Pending</h2>
    <div className="flex justify-between">
      <div className="basis-8/10 mr-12">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell className="!p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Request</Table.HeadCell>
            <Table.HeadCell>Requested by</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Organisation</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is an example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  20 November 2022
                </span>
              </Table.Cell>
              <Table.Cell>John Njoroge</Table.Cell>
              <Table.Cell>WSP</Table.Cell>
              <Table.Cell>Kiambu Water</Table.Cell>
              <Table.Cell>
                <Badge color="info" className="uppercase">
                  Stage 1
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is another example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  18 November 2022
                </span>
              </Table.Cell>
              <Table.Cell> Susan Chirchir</Table.Cell>
              <Table.Cell>WSP</Table.Cell>
              <Table.Cell>Bomet Water Company</Table.Cell>
              <Table.Cell>
                <Badge color="success" className="uppercase">
                  Stage 2
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is yet another example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  16 November 2022
                </span>
              </Table.Cell>
              <Table.Cell>Justus Otieno</Table.Cell>
              <Table.Cell>SSSP</Table.Cell>
              <Table.Cell> L. Victoria Basin Water</Table.Cell>
              <Table.Cell>
                <Badge color="purple" className="uppercase">
                  Stage 3
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is yet another example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  16 November 2022
                </span>
              </Table.Cell>
              <Table.Cell>Justus Otieno</Table.Cell>
              <Table.Cell>SSSP</Table.Cell>
              <Table.Cell> L. Victoria Basin Water</Table.Cell>
              <Table.Cell>
                <Badge color="purple" className="uppercase">
                  Stage 3
                </Badge>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="basis-2/10 bg-white rounded shadow-lg border border-wsblue-200 p-6">
        <div className="mb-8 text-sm uppercase">
          <Progress
            color="blue"
            progress={45}
            label="Stage 1"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>
        <div className="mb-8 text-sm uppercase">
          <Progress
            color="green"
            progress={20}
            label="Stage 2"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>
        <div className="mb-8 text-sm uppercase">
          <Progress
            color="purple"
            progress={35}
            label="Stage 3"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>

        <p className="mx-auto flex flex-col justify-center font-bold text-white text-2xl text-wsblue-200 font-light text-center mt-12 w-12 h-12 rounded-full bg-wsblue-600 border-2 border-wsblue-400">
          <span>23</span>
        </p>
        <p className="text-sm uppercase text-center font-bold mt-4">
          Pending approvals
        </p>
      </div>
    </div>

    <h2 className="font-bold mt-12 mb-2 uppercase">Approved</h2>
    <div className="flex justify-between">
      <div className="basis-8/10 mr-12">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell className="!p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Request</Table.HeadCell>
            <Table.HeadCell>Requested by</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Organisation</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is an example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  20 November 2022
                </span>
              </Table.Cell>
              <Table.Cell>John Njoroge</Table.Cell>
              <Table.Cell>WSP</Table.Cell>
              <Table.Cell>Kiambu Water</Table.Cell>
              <Table.Cell>
                <Badge color="info" className="uppercase">
                  Stage 1
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is another example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  18 November 2022
                </span>
              </Table.Cell>
              <Table.Cell> Susan Chirchir</Table.Cell>
              <Table.Cell>WSP</Table.Cell>
              <Table.Cell>Bomet Water Company</Table.Cell>
              <Table.Cell>
                <Badge color="success" className="uppercase">
                  Stage 2
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is yet another example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  16 November 2022
                </span>
              </Table.Cell>
              <Table.Cell>Justus Otieno</Table.Cell>
              <Table.Cell>SSSP</Table.Cell>
              <Table.Cell> L. Victoria Basin Water</Table.Cell>
              <Table.Cell>
                <Badge color="purple" className="uppercase">
                  Stage 3
                </Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-wsblue-700 dark:bg-wsblue-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-wsblue-900 dark:text-white">
                This is yet another example of a request
                <span className="font-normal text-xs italic block mt-1 text-wsblue-500">
                  16 November 2022
                </span>
              </Table.Cell>
              <Table.Cell>Justus Otieno</Table.Cell>
              <Table.Cell>SSSP</Table.Cell>
              <Table.Cell> L. Victoria Basin Water</Table.Cell>
              <Table.Cell>
                <Badge color="purple" className="uppercase">
                  Stage 3
                </Badge>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="basis-2/10 bg-white rounded shadow-lg border border-wsblue-200 p-6">
        <div className="mb-8 text-sm uppercase">
          <Progress
            color="blue"
            progress={32}
            label="WSPs"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>
        <div className="mb-8 text-sm uppercase">
          <Progress
            color="green"
            progress={19}
            label="SSSPs"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>
        <div className="mb-8 text-sm uppercase">
          <Progress
            color="purple"
            progress={59}
            label="County"
            labelPosition="outside"
            labelProgress={true}
          />
        </div>

        <p className="mx-auto flex flex-col justify-center font-bold text-white text-2xl text-wsblue-400 font-light text-center mt-12 w-12 h-12 rounded-full bg-wsblue-600 border-2 border-wsblue-400">
          <span>87</span>
        </p>
        <p className="text-sm uppercase text-center font-bold mt-4">
          Approved requests
        </p>
      </div>
    </div>
  </div>
)

export default Dashboard
