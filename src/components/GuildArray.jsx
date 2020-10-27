//	import React from 'react';

import GuildRow from './GuildRow';
import guildResult from './guidResult';

function GuildArray() {
  return (
    <table>
      {guildResult.map((guild) => (
        <GuildRow
          name={guild.name}
          realm={guild.realm}
          flag={guild.flag}
          raidRank={guild.raidRank}
          key={guild.raidRank}
        />
      ))}
    </table>
  );
}

export default GuildArray;
