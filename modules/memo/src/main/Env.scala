package lila.memo

import com.softwaremill.macwire._
import io.methvin.play.autoconfig._
import play.api.Configuration
import lila.db.dsl.Coll

case class MemoConfig(
    @ConfigName("collection.cache") cacheColl: String,
    @ConfigName("collection.config") configColl: String
)

final class Env(appConfig: Configuration, db: lila.db.Env)(implicit system: akka.actor.ActorSystem) {

  private val config = appConfig.get[MemoConfig]("memo")(AutoConfig.loader)

  lazy val mongoCache = wire[MongoCache.Builder]

  lazy val configStore = wire[ConfigStore.Builder]

  lazy val settingStore = wire[SettingStore.Builder]

  lazy val asyncCache = wire[AsyncCache.Builder]
}
